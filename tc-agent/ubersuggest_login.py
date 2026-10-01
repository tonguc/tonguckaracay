#!/usr/bin/env python3
r"""
Ubersuggest MCP — tek seferlik tarayıcı girişi (OAuth + PKCE).

Ne zaman: bot'un Ubersuggest bağlantısı koptuğunda (agent.log'da
"Ubersuggest token yenilenemedi ... yeniden giriş gerekebilir") ya da yeni kurulumda.

Kullanım (kendi bilgisayarında, tarayıcı açılır → Ubersuggest'e giriş yap → onayla):

    python ubersuggest_login.py | ssh -i ~/.ssh/povlex_deploy_20260911 ubuntu@51.254.209.34 \
      "cd /home/ubuntu/tonguckaracay/tc-agent && T=\$(cat) && sed -i '/^UBERSUGGEST_REFRESH_TOKEN=/d' config-tc.env \
       && echo \"\$T\" >> config-tc.env && sudo -n systemctl restart tc-agent && systemctl is-active tc-agent"

Betik yalnızca `UBERSUGGEST_REFRESH_TOKEN=...` satırını stdout'a yazar (diğer her şey
stderr'e), böylece token ekrana/dosyaya düşmeden doğrudan sunucuya gider. Config'e
yeni token girilince bot eski ubersuggest_token.json durumunu kendisi sıfırlar.

Not: refresh token her yenilemede değişir — bu token'ı bot'tan başka yerde kullanma.
"""
import base64, hashlib, http.server, secrets, sys, threading, urllib.parse, webbrowser
import requests

BASE = "https://ubersuggest-mcp.neilpatelapi.com"
PORT = 8765
REDIRECT = f"http://127.0.0.1:{PORT}/callback"
SCOPES = "profile keywords serp domain content utility"


def log(*a):
    print(*a, file=sys.stderr, flush=True)


def main():
    reg = requests.post(f"{BASE}/register", timeout=30, json={
        "client_name": "tc-agent (tonguckaracay)",
        "redirect_uris": [REDIRECT],
        "grant_types": ["authorization_code", "refresh_token"],
        "response_types": ["code"],
        "token_endpoint_auth_method": "none",
        "scope": SCOPES,
    })
    reg.raise_for_status()
    client_id = reg.json()["client_id"]

    verifier = base64.urlsafe_b64encode(secrets.token_bytes(48)).rstrip(b"=").decode()
    challenge = base64.urlsafe_b64encode(hashlib.sha256(verifier.encode()).digest()).rstrip(b"=").decode()
    state = secrets.token_urlsafe(16)
    auth_url = f"{BASE}/authorize?" + urllib.parse.urlencode({
        "response_type": "code", "client_id": client_id, "redirect_uri": REDIRECT,
        "scope": SCOPES, "state": state, "code_challenge": challenge,
        "code_challenge_method": "S256", "resource": f"{BASE}/mcp"})

    result = {}

    class Handler(http.server.BaseHTTPRequestHandler):
        def do_GET(self):
            q = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            result.update({k: v[0] for k, v in q.items()})
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write("<h2>Tamam — bu sekmeyi kapatabilirsin.</h2>".encode())
            threading.Thread(target=srv.shutdown).start()

        def log_message(self, *a):
            pass

    srv = http.server.HTTPServer(("127.0.0.1", PORT), Handler)
    log("Tarayıcıda Ubersuggest girişi açılıyor. Açılmazsa bu adresi yapıştır:\n" + auth_url)
    webbrowser.open(auth_url)
    srv.serve_forever()

    if result.get("state") != state or "code" not in result:
        log(f"Giriş başarısız: {result.get('error', result)}")
        sys.exit(1)

    tok = requests.post(f"{BASE}/token", timeout=30, data={
        "grant_type": "authorization_code", "code": result["code"], "redirect_uri": REDIRECT,
        "client_id": client_id, "code_verifier": verifier, "resource": f"{BASE}/mcp"})
    tok.raise_for_status()
    refresh = tok.json().get("refresh_token")
    if not refresh:
        log("Sunucu refresh token döndürmedi.")
        sys.exit(1)
    log("Giriş tamam.")
    print(f"UBERSUGGEST_REFRESH_TOKEN={refresh}")


if __name__ == "__main__":
    main()
