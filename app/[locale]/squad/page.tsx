'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const AGENTS = [
  { id:'VEGA',    label:'CEO', desc:'Chief Strategy Officer',    color:'#7c6fff', bg:'rgba(124,111,255,0.15)', role:'seo' },
  { id:'ATLAS',   label:'AI',  desc:'AI Visibility Auditor',     color:'#22c55e', bg:'rgba(34,197,94,0.12)',   role:'seo' },
  { id:'REX',     label:'SOV', desc:'Competitor AI SOV',         color:'#f97316', bg:'rgba(249,115,22,0.12)',  role:'seo' },
  { id:'DANTE',   label:'CI',  desc:'Competitor Intelligence',   color:'#ec4899', bg:'rgba(236,72,153,0.12)', role:'seo' },
  { id:'MARCUS',  label:'ENT', desc:'Entity Builder',            color:'#3b82f6', bg:'rgba(59,130,246,0.12)', role:'seo' },
  { id:'FELIX',   label:'SCH', desc:'Schema Engineer',           color:'#a3e635', bg:'rgba(163,230,53,0.12)', role:'seo' },
  { id:'OLIVER',  label:'ANS', desc:'Answer Intelligence',       color:'#f59e0b', bg:'rgba(245,158,11,0.12)', role:'seo' },
  { id:'HUNTER',  label:'PR',  desc:'Citation Builder',          color:'#ef4444', bg:'rgba(239,68,68,0.12)',  role:'seo' },
  { id:'NERO',    label:'INT', desc:'Intent Mapping',            color:'#8b5cf6', bg:'rgba(139,92,246,0.12)', role:'seo' },
  { id:'ZEPHYR',  label:'TEC', desc:'Technical SEO',             color:'#06b6d4', bg:'rgba(6,182,212,0.12)',  role:'seo' },
  { id:'CASPIAN', label:'LOC', desc:'Local SEO',                 color:'#f97316', bg:'rgba(249,115,22,0.12)', role:'seo' },
  { id:'ARGO',    label:'TOP', desc:'Topical Authority',         color:'#10b981', bg:'rgba(16,185,129,0.12)', role:'seo' },
  { id:'VECTOR',  label:'PRG', desc:'Programmatic SEO',          color:'#6366f1', bg:'rgba(99,102,241,0.12)', role:'seo' },
  { id:'NOVA',    label:'STR', desc:'Content Strategist',        color:'#ec4899', bg:'rgba(236,72,153,0.12)', role:'seo' },
  { id:'LYRA',    label:'GEO', desc:'GEO Optimizer',             color:'#f59e0b', bg:'rgba(245,158,11,0.12)', role:'seo' },
  { id:'IRIS',    label:'OPT', desc:'Answer Optimizer',          color:'#ef4444', bg:'rgba(239,68,68,0.12)',  role:'seo' },
  { id:'SERA',    label:'EAT', desc:'E-E-A-T Architect',         color:'#7c6fff', bg:'rgba(124,111,255,0.15)',role:'seo' },
  { id:'MIRA',    label:'GAP', desc:'Content Gap Hunter',        color:'#22c55e', bg:'rgba(34,197,94,0.12)', role:'seo' },
  { id:'LUNA',    label:'MON', desc:'Brand Monitor',             color:'#f97316', bg:'rgba(249,115,22,0.12)', role:'seo' },
  { id:'ECHO',    label:'SNP', desc:'Snippet Hunter',            color:'#3b82f6', bg:'rgba(59,130,246,0.12)', role:'seo' },
  { id:'AURORA',  label:'INT', desc:'International SEO',         color:'#a3e635', bg:'rgba(163,230,53,0.12)', role:'seo' },
  { id:'SAGE',    label:'QRY', desc:'AI Query Intel',            color:'#8b5cf6', bg:'rgba(139,92,246,0.12)', role:'seo' },
  { id:'CELESTE', label:'REV', desc:'Review Optimizer',          color:'#06b6d4', bg:'rgba(6,182,212,0.12)',  role:'seo' },
  { id:'DIANA',   label:'CRO', desc:'CRO Optimizer',             color:'#ec4899', bg:'rgba(236,72,153,0.12)', role:'seo' },
  { id:'RIO',     label:'ONB', desc:'Client Onboarding',         color:'#7c6fff', bg:'rgba(124,111,255,0.15)',role:'ops' },
  { id:'KAI',     label:'PRO', desc:'Proposal Builder',          color:'#22c55e', bg:'rgba(34,197,94,0.12)', role:'ops' },
  { id:'MAX',     label:'RPT', desc:'Reporting Agent',           color:'#3b82f6', bg:'rgba(59,130,246,0.12)', role:'ops' },
  { id:'OTTO',    label:'INV', desc:'Collections Agent',         color:'#ef4444', bg:'rgba(239,68,68,0.12)',  role:'ops' },
] as const;

type Agent = typeof AGENTS[number];
type Lang = 'TR' | 'EN';
type Mode = 'text' | 'voice';

interface Message {
  id: string;
  agentId: string | null;
  text: string;
  isUser: boolean;
  isSystem: boolean;
  time: string;
}

export default function SquadMeetingPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [lang, setLangState] = useState<Lang>('TR');
  const [mode, setMode] = useState<Mode>('text');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [speakingAgent, setSpeakingAgentState] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [elapsed, setElapsed] = useState(0);

  const chatLogRef = useRef<HTMLDivElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);
  const conversationRef = useRef<{role: string; content: string}[]>([]);
  const startTimeRef = useRef(Date.now());

  const addMessage = useCallback((msg: Omit<Message, 'id' | 'time'>) => {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    setMessages(prev => [...prev, { ...msg, id: Math.random().toString(36).slice(2), time }]);
  }, []);

  const setSpeaking = useCallback((agentId: string | null) => {
    setSpeakingAgentState(agentId);
  }, []);

  async function handlePasswordSubmit() {
    const res = await fetch('/api/squad-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: passwordInput }),
    });
    const data = await res.json();
    if (data.ok) {
      setAuthenticated(true);
    } else {
      setPasswordError(true);
      setPasswordInput('');
      setTimeout(() => setPasswordError(false), 2000);
    }
  }

  // Hide site header/footer/whatsapp
  useEffect(() => {
    const els = document.querySelectorAll('header, footer, nav, a[href*="wa.me"]') as NodeListOf<HTMLElement>;
    els.forEach(el => { el.style.display = 'none'; });
    document.body.style.overflow = 'hidden';
    return () => {
      els.forEach(el => { el.style.display = ''; });
      document.body.style.overflow = '';
    };
  }, []);

  // Preload voices
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const synth = window.speechSynthesis;
    synth.getVoices();
    const handler = () => synth.getVoices();
    synth.addEventListener('voiceschanged', handler);
    return () => synth.removeEventListener('voiceschanged', handler);
  }, []);

  // Timer
  useEffect(() => {
    if (!authenticated) return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [authenticated]);

  const timerDisplay = `${String(Math.floor(elapsed / 60)).padStart(2,'0')}:${String(elapsed % 60).padStart(2,'0')}`;

  // Scroll to bottom
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  // Welcome message
  useEffect(() => {
    if (!authenticated) return;
    startTimeRef.current = Date.now();
    addMessage({ agentId: null, text: lang === 'TR' ? 'Toplantı başladı — 28 agent aktif' : 'Meeting started — 28 agents active', isUser: false, isSystem: true });
    setTimeout(() => {
      setSpeaking('VEGA');
      const intro = lang === 'TR'
        ? 'Merhaba. Ben VEGA, Squad koordinatörüyüm. Analiz etmek istediğiniz domain\'i veya konuyu yazın. Hangi agent\'ların devreye gireceğine ben karar veririm.'
        : 'Hello. I\'m VEGA, the Squad coordinator. Type the domain or topic you want to analyze. I\'ll decide which agents to activate.';
      addMessage({ agentId: 'VEGA', text: intro, isUser: false, isSystem: false });
      conversationRef.current.push({ role: 'assistant', content: '**VEGA:** ' + intro });
      setTimeout(() => { speakText(intro, 'VEGA', lang); setTimeout(() => setSpeaking(null), 3000); }, 500);
    }, 600);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  function speakText(_text: string, _agentId: string, _currentLang: Lang) {
    // TTS disabled — will be replaced with ElevenLabs
  }

  function setLang(l: Lang) {
    setLangState(l);
    addMessage({ agentId: null, text: l === 'TR' ? 'Dil Türkçeye geçildi' : 'Language switched to English', isUser: false, isSystem: true });
  }

  function mentionAgent(id: string) {
    setInput(`@${id} `);
    textInputRef.current?.focus();
  }

  function buildSystemPrompt(currentLang: Lang) {
    return `AI SEO Squad meeting room. 28 specialized agents. Respond in ${currentLang === 'TR' ? 'Turkish' : 'English'}.

Agents: VEGA(coordinator/CEO), ATLAS(AI visibility), REX(competitor SOV), DANTE(competitor intel), MARCUS(entity), FELIX(schema), OLIVER(answer intel), HUNTER(citations/PR), NERO(intent mapping), ZEPHYR(technical SEO), CASPIAN(local SEO), ARGO(topical authority), VECTOR(programmatic SEO), NOVA(content strategy), LYRA(GEO optimization), IRIS(answer optimization), SERA(E-E-A-T), MIRA(content gaps), LUNA(brand monitor), ECHO(snippets), AURORA(international SEO), SAGE(AI queries), CELESTE(reviews), DIANA(CRO), RIO(client onboarding), KAI(proposals), MAX(reporting), OTTO(collections).

FORMAT: Each agent response on new line: **AGENTNAME:** [response]
- If user mentions @AGENTNAME, that agent speaks first
- VEGA coordinates and summarizes when 3+ agents speak
- Give thorough, specific, actionable responses — not just 1-2 sentences
- Agents can build on each other or respectfully disagree
- Always end with concrete next steps`;
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput('');
    setIsLoading(true);
    setLiveTranscript('');

    addMessage({ agentId: null, text, isUser: true, isSystem: false });
    conversationRef.current.push({ role: 'user', content: text });

    const mentionMatch = text.match(/@([A-Z]+)/);
    const primaryAgent = mentionMatch?.[1] || 'VEGA';
    setSpeaking(primaryAgent);

    try {
      const res = await fetch('/api/squad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationRef.current.slice(-8),
          systemPrompt: buildSystemPrompt(lang),
        }),
      });

      const data = await res.json();
      if (!data.content?.[0]) throw new Error('No response');

      const fullText: string = data.content[0].text;
      conversationRef.current.push({ role: 'assistant', content: fullText });

      const blocks = fullText.split(/\n(?=\*\*[A-Z]+:\*\*)/);

      if (blocks.length > 1) {
        for (const block of blocks) {
          const match = block.match(/^\*\*([A-Z]+):\*\*\s*([\s\S]*)/);
          if (match) {
            const agentId = match[1];
            const agentText = match[2].trim();
            setSpeaking(agentId);
            addMessage({ agentId, text: agentText, isUser: false, isSystem: false });
            speakText(agentText, agentId, lang);
            await new Promise(r => setTimeout(r, 600));
          }
        }
      } else {
        const cleanText = fullText.replace(/\*\*[A-Z]+:\*\*\s*/g, '').trim();
        addMessage({ agentId: primaryAgent, text: cleanText, isUser: false, isSystem: false });
        speakText(cleanText, primaryAgent, lang);
      }
    } catch {
      addMessage({ agentId: null, text: lang === 'TR' ? 'Bağlantı hatası oluştu.' : 'Connection error.', isUser: false, isSystem: true });
    }

    setSpeaking(null);
    setIsLoading(false);
  }

  function initRecognition() {
    if (typeof window === 'undefined') return null;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { addMessage({ agentId: null, text: 'Tarayıcınız ses tanımayı desteklemiyor.', isUser: false, isSystem: true }); return null; }
    const rec = new SR();
    rec.lang = lang === 'TR' ? 'tr-TR' : 'en-US';
    rec.interimResults = true;
    rec.continuous = false;
    rec.onresult = (e: any) => {
      let interim = '', final = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) final += e.results[i][0].transcript;
        else interim += e.results[i][0].transcript;
      }
      setLiveTranscript(final || interim);
      if (final) { setInput(final); stopRecording(); setTimeout(() => sendMessage(), 200); }
    };
    rec.onerror = () => stopRecording();
    rec.onend = () => stopRecording();
    return rec;
  }

  function toggleMic() { if (isRecording) stopRecording(); else startRecording(); }
  function startRecording() { const rec = initRecognition(); if (!rec) return; recognitionRef.current = rec; rec.start(); setIsRecording(true); }
  function stopRecording() { recognitionRef.current?.stop(); setIsRecording(false); }

  const seoAgents = AGENTS.filter(a => a.role === 'seo');
  const opsAgents = AGENTS.filter(a => a.role === 'ops');

  // PASSWORD SCREEN
  if (!authenticated) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, fontFamily: 'Inter, sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 48, height: 48, background: '#7c6fff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, color: 'white' }}>S</div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#e8e8f0' }}>AI SEO Squad</div>
          <div style={{ fontSize: 13, color: '#6b6b80', marginTop: -12 }}>Meeting Room</div>
          <input
            autoFocus
            type="password"
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handlePasswordSubmit()}
            placeholder="Şifre"
            style={{ width: 220, padding: '12px 16px', borderRadius: 10, border: `1px solid ${passwordError ? '#ef4444' : 'rgba(255,255,255,0.1)'}`, background: '#111118', color: '#e8e8f0', fontSize: 15, outline: 'none', textAlign: 'center', letterSpacing: '0.2em', transition: 'border-color 0.2s' }}
          />
          {passwordError && <div style={{ fontSize: 12, color: '#ef4444', marginTop: -16 }}>Hatalı şifre</div>}
          <button onClick={handlePasswordSubmit} style={{ width: 220, padding: '12px 0', borderRadius: 10, border: 'none', background: '#7c6fff', color: 'white', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Giriş</button>
        </div>
      </div>
    );
  }

  // MAIN MEETING ROOM
  return (
    <div style={{ position: 'fixed', inset: 0, fontFamily: 'Inter, sans-serif', background: '#0a0a0f', color: '#e8e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 9999 }}>

      {/* TOP BAR */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: 48, borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0a0a0f', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 24, background: '#7c6fff', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'white' }}>S</div>
          <span style={{ fontSize: 13, fontWeight: 500 }}>AI SEO Squad</span>
          <span style={{ fontSize: 11, color: '#6b6b80', fontFamily: 'monospace' }}>— Meeting Room</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {speakingAgent && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(124,111,255,0.12)', border: '1px solid rgba(124,111,255,0.25)', borderRadius: 20, padding: '3px 12px', fontSize: 11, fontFamily: 'monospace', color: '#7c6fff' }}>
              <span style={{ display: 'inline-flex', gap: 2, alignItems: 'flex-end', height: 10 }}>
                {[3,7,10,5].map((h,i) => <span key={i} style={{ width: 2, height: h, background: '#7c6fff', borderRadius: 1, animation: `bar 0.8s ${i*0.15}s ease-in-out infinite` }} />)}
              </span>
              {speakingAgent}
            </div>
          )}
          <div style={{ fontSize: 11, color: '#6b6b80', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            {timerDisplay}
          </div>
          <div style={{ display: 'flex', background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 7, padding: 2, gap: 2 }}>
            {(['TR','EN'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ fontSize: 10, fontFamily: 'monospace', fontWeight: 600, padding: '2px 9px', borderRadius: 5, border: 'none', background: lang===l ? '#7c6fff' : 'transparent', color: lang===l ? 'white' : '#6b6b80', cursor: 'pointer' }}>{l}</button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN — chat left big, agents right small */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* CHAT — main area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.07)', minWidth: 0 }}>
          <div ref={chatLogRef} style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {messages.map(msg => <ChatMessage key={msg.id} msg={msg} agents={AGENTS} lang={lang} />)}
            {isLoading && (
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(124,111,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, fontFamily: 'monospace', color: '#7c6fff', flexShrink: 0 }}>CEO</div>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '11px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12 }}>
                  {[0,0.2,0.4].map((d,i) => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#7c6fff', animation: `tdot 1.2s ${d}s infinite` }} />)}
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div style={{ padding: '12px 20px 16px', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0a0a0f', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#3a3a4a' }}>{lang==='TR' ? 'MOD:' : 'MODE:'}</span>
              <div style={{ display: 'flex', background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: 2, gap: 2 }}>
                {(['text','voice'] as Mode[]).map(m => (
                  <button key={m} onClick={() => setMode(m)} style={{ fontSize: 10, fontFamily: 'monospace', padding: '2px 9px', borderRadius: 4, border: 'none', background: mode===m ? 'rgba(124,111,255,0.15)' : 'transparent', color: mode===m ? '#7c6fff' : '#6b6b80', cursor: 'pointer' }}>
                    {m==='text' ? '⌨' : '🎙'} {m==='text' ? (lang==='TR' ? 'metin' : 'text') : (lang==='TR' ? 'ses' : 'voice')}
                  </button>
                ))}
              </div>
              {liveTranscript && <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#7c6fff', opacity: 0.7, fontStyle: 'italic' }}>{liveTranscript}</span>}
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <textarea
                ref={textInputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                placeholder={lang==='TR' ? 'Domain veya konu yazın... (@ATLAS gibi agent da mention edebilirsiniz)' : 'Type a domain or topic... (you can @mention agents)'}
                rows={2}
                style={{ flex: 1, resize: 'none', fontFamily: 'Inter, sans-serif', fontSize: 14, minHeight: 48, maxHeight: 120, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', background: '#111118', color: '#e8e8f0', lineHeight: 1.5, outline: 'none' }}
              />
              {mode==='voice' && (
                <button onClick={toggleMic} style={{ width: 44, height: 44, borderRadius: 10, border: `1px solid ${isRecording ? '#ef4444' : 'rgba(255,255,255,0.07)'}`, background: isRecording ? 'rgba(239,68,68,0.15)' : '#111118', color: isRecording ? '#ef4444' : '#6b6b80', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                  {isRecording ? '⏹' : '🎙'}
                </button>
              )}
              <button onClick={sendMessage} disabled={isLoading} style={{ width: 44, height: 44, borderRadius: 10, border: 'none', background: '#7c6fff', color: 'white', cursor: isLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, opacity: isLoading ? 0.5 : 1 }}>↑</button>
            </div>
          </div>
        </div>

        {/* AGENT PANEL — right, compact */}
        <div style={{ width: 200, minWidth: 200, overflowY: 'auto', padding: '12px 10px', background: '#0d0d14', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ fontSize: 9, fontFamily: 'monospace', color: '#2a2a3a', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 6px 6px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: 4 }}>SEO + AI</div>
          {seoAgents.map(agent => <AgentRow key={agent.id} agent={agent} isSpeaking={speakingAgent===agent.id} onClick={() => mentionAgent(agent.id)} />)}
          <div style={{ fontSize: 9, fontFamily: 'monospace', color: '#2a2a3a', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 6px 6px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: 4, marginTop: 6 }}>OPS</div>
          {opsAgents.map(agent => <AgentRow key={agent.id} agent={agent} isSpeaking={speakingAgent===agent.id} onClick={() => mentionAgent(agent.id)} />)}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
        @keyframes bar { 0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)} }
        @keyframes tdot { 0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-5px);opacity:1} }
        @keyframes speakGlow { 0%,100%{box-shadow:0 0 0 0 rgba(124,111,255,0)}50%{box-shadow:0 0 12px 2px rgba(124,111,255,0.3)} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.06); border-radius: 2px; }
      `}</style>
    </div>
  );
}

function AgentRow({ agent, isSpeaking, onClick }: { agent: Agent; isSpeaking: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} title={agent.desc} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 8px', borderRadius: 7, cursor: 'pointer', background: isSpeaking ? 'rgba(124,111,255,0.1)' : 'transparent', border: `1px solid ${isSpeaking ? 'rgba(124,111,255,0.3)' : 'transparent'}`, transition: 'all 0.15s', animation: isSpeaking ? 'speakGlow 1.5s infinite' : 'none' }}>
      <div style={{ width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, fontFamily: 'monospace', background: agent.bg, color: agent.color, flexShrink: 0 }}>{agent.label}</div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, fontFamily: 'monospace', color: isSpeaking ? '#7c6fff' : '#e8e8f0', letterSpacing: '0.03em' }}>{agent.id}</div>
        <div style={{ fontSize: 9, color: '#4a4a5a', lineHeight: 1.2 }}>{agent.desc}</div>
      </div>
      {isSpeaking && (
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'flex-end', gap: 1.5, height: 10 }}>
          {[3,6,9,4].map((h,i) => <div key={i} style={{ width: 2, height: h, background: '#7c6fff', borderRadius: 1, animation: `bar 0.8s ${i*0.15}s ease-in-out infinite` }} />)}
        </div>
      )}
    </div>
  );
}

function ChatMessage({ msg, agents, lang }: { msg: Message; agents: typeof AGENTS; lang: Lang }) {
  if (msg.isSystem) {
    return <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}><div style={{ fontSize: 11, fontFamily: 'monospace', color: '#2a2a3a' }}>{msg.text}</div></div>;
  }
  const agent = agents.find(a => a.id === msg.agentId);
  const isUser = msg.isUser;
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexDirection: isUser ? 'row-reverse' : 'row' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, fontFamily: 'monospace', background: isUser ? 'rgba(124,111,255,0.15)' : (agent?.bg || 'rgba(255,255,255,0.08)'), color: isUser ? '#7c6fff' : (agent?.color || '#888'), flexShrink: 0, marginTop: 2 }}>
        {isUser ? (lang==='TR' ? 'SİZ' : 'YOU') : (agent?.label || msg.agentId?.slice(0,3) || '?')}
      </div>
      <div style={{ flex: 1, minWidth: 0, maxWidth: '80%' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 5, flexDirection: isUser ? 'row-reverse' : 'row' }}>
          <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.05em', color: isUser ? '#7c6fff' : (agent?.color || '#888') }}>{isUser ? (lang==='TR' ? 'Siz' : 'You') : msg.agentId}</span>
          <span style={{ fontSize: 10, color: '#2a2a3a', fontFamily: 'monospace' }}>{msg.time}</span>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.65, padding: '12px 16px', borderRadius: 12, border: '1px solid', borderColor: isUser ? 'rgba(124,111,255,0.2)' : 'rgba(255,255,255,0.07)', background: isUser ? 'rgba(124,111,255,0.1)' : 'rgba(255,255,255,0.03)', color: isUser ? '#c4beff' : '#e8e8f0', whiteSpace: 'pre-wrap' }}>
          {msg.text}
        </div>
      </div>
    </div>
  );
}
