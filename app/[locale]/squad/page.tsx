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
  { id:'VECTOR',  label:'PRG', desc:'Programmatic SEO',         color:'#6366f1', bg:'rgba(99,102,241,0.12)', role:'seo' },
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

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerDisplay = `${String(Math.floor(elapsed / 60)).padStart(2,'0')}:${String(elapsed % 60).padStart(2,'0')}`;

  // Scroll to bottom
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  // Welcome message
  useEffect(() => {
    addMessage({ agentId: null, text: lang === 'TR' ? 'Toplantı başladı — 28 agent aktif' : 'Meeting started — 28 agents active', isUser: false, isSystem: true });
    setTimeout(() => {
      setSpeaking('VEGA');
      const intro = lang === 'TR'
        ? 'Merhaba. Ben VEGA, Squad koordinatörüyüm. Analiz etmek istediğiniz domain\'i veya konuyu yazın. Hangi agent\'ların devreye gireceğine ben karar veririm.'
        : 'Hello. I\'m VEGA, the Squad coordinator. Type the domain or topic you want to analyze. I\'ll decide which agents to activate.';
      addMessage({ agentId: 'VEGA', text: intro, isUser: false, isSystem: false });
      conversationRef.current.push({ role: 'assistant', content: '**VEGA:** ' + intro });
      speakText(intro, 'VEGA', lang);
      setTimeout(() => setSpeaking(null), 3000);
    }, 600);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function speakText(text: string, agentId: string, currentLang: Lang) {
    if (typeof window === 'undefined') return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = currentLang === 'TR' ? 'tr-TR' : 'en-US';
    const voices = synth.getVoices();
    const langVoices = voices.filter(v => v.lang.startsWith(currentLang === 'TR' ? 'tr' : 'en'));
    const agentIdx = AGENTS.findIndex(a => a.id === agentId);
    if (langVoices.length > 0) utt.voice = langVoices[agentIdx % langVoices.length];
    utt.rate = 1.05;
    utt.pitch = 0.95 + (agentIdx % 5) * 0.05;
    synth.speak(utt);
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
    return `AI SEO Squad meeting room. 28 agents. Language: ${currentLang === 'TR' ? 'Turkish' : 'English'}.

Agents: VEGA(coordinator), ATLAS(AI visibility), REX(competitor SOV), DANTE(competitor intel), MARCUS(entity), FELIX(schema), OLIVER(answer intel), HUNTER(citations), NERO(intent), ZEPHYR(technical), CASPIAN(local), ARGO(topical authority), VECTOR(programmatic), NOVA(content strategy), LYRA(GEO), IRIS(answers), SERA(E-E-A-T), MIRA(content gaps), LUNA(brand monitor), ECHO(snippets), AURORA(international), SAGE(AI queries), CELESTE(reviews), DIANA(CRO), RIO(onboarding), KAI(proposals), MAX(reporting), OTTO(collections).

FORMAT for multiple agents: **AGENTNAME:** [response]
- @mention → that agent speaks first
- 2-3 sentences per agent max
- VEGA summarizes if 3+ agents speak
- Be direct and actionable`;
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
          messages: conversationRef.current.slice(-6),
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
            await new Promise(r => setTimeout(r, 400));
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
    if (typeof window === 'undefined') return;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return null;
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
      if (final) {
        setInput(final);
        stopRecording();
        setTimeout(() => sendMessage(), 100);
      }
    };
    rec.onerror = () => stopRecording();
    rec.onend = () => stopRecording();
    return rec;
  }

  function toggleMic() {
    if (isRecording) stopRecording();
    else startRecording();
  }

  function startRecording() {
    const rec = initRecognition();
    if (!rec) return;
    recognitionRef.current = rec;
    rec.start();
    setIsRecording(true);
  }

  function stopRecording() {
    recognitionRef.current?.stop();
    setIsRecording(false);
  }

  const speakingAgentData = AGENTS.find(a => a.id === speakingAgent);

  const seoAgents = AGENTS.filter(a => a.role === 'seo');
  const opsAgents = AGENTS.filter(a => a.role === 'ops');

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0f', color: '#e8e8f0', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* TOP BAR */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: 52, borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(10,10,15,0.95)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 28, height: 28, background: '#7c6fff', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: 'white' }}>S</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>AI SEO Squad</div>
            <div style={{ fontSize: 11, color: '#6b6b80', fontFamily: 'monospace' }}>by tonguckaracay.com</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {speakingAgent && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(124,111,255,0.15)', border: '1px solid rgba(124,111,255,0.3)', borderRadius: 20, padding: '4px 14px', fontSize: 11, fontFamily: 'monospace', color: '#7c6fff' }}>
              <span style={{ display: 'inline-flex', gap: 2, alignItems: 'flex-end', height: 10 }}>
                {[3,7,10,5].map((h, i) => (
                  <span key={i} style={{ width: 2, height: h, background: '#7c6fff', borderRadius: 1, animation: `bar 0.8s ${i * 0.15}s ease-in-out infinite` }} />
                ))}
              </span>
              {speakingAgent} {lang === 'TR' ? 'konuşuyor' : 'speaking'}
            </div>
          )}
          <div style={{ fontSize: 12, color: '#6b6b80', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e', animation: 'pulse 2s infinite' }} />
            LIVE
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#6b6b80' }}>{timerDisplay}</div>
          <div style={{ display: 'flex', background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: 3, gap: 2 }}>
            {(['TR', 'EN'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ fontSize: 11, fontFamily: 'monospace', fontWeight: 500, padding: '3px 10px', borderRadius: 5, border: 'none', background: lang === l ? '#7c6fff' : 'transparent', color: lang === l ? 'white' : '#6b6b80', cursor: 'pointer', letterSpacing: '0.05em' }}>{l}</button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* AGENT GRID */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 10, alignContent: 'start' }}>
          <div style={{ gridColumn: '1 / -1', fontSize: 10, fontFamily: 'monospace', color: '#2a2a3a', letterSpacing: '0.1em', textTransform: 'uppercase', paddingBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 2 }}>SEO + AI AGENTS</div>
          {seoAgents.map(agent => <AgentCard key={agent.id} agent={agent} isSpeaking={speakingAgent === agent.id} onClick={() => mentionAgent(agent.id)} />)}
          <div style={{ gridColumn: '1 / -1', fontSize: 10, fontFamily: 'monospace', color: '#2a2a3a', letterSpacing: '0.1em', textTransform: 'uppercase', paddingBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 2, marginTop: 8 }}>AGENCY OPS</div>
          {opsAgents.map(agent => <AgentCard key={agent.id} agent={agent} isSpeaking={speakingAgent === agent.id} onClick={() => mentionAgent(agent.id)} isDashed />)}
        </div>

        {/* RIGHT PANEL */}
        <div style={{ width: 380, minWidth: 380, borderLeft: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', background: '#111118' }}>
          <div style={{ padding: '14px 16px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#6b6b80', fontFamily: 'monospace', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{lang === 'TR' ? 'Toplantı Transkripti' : 'Meeting Transcript'}</div>
            <button onClick={() => { setMessages([]); conversationRef.current = []; }} style={{ fontSize: 10, fontFamily: 'monospace', color: '#3a3a4a', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', borderRadius: 4 }}>{lang === 'TR' ? 'temizle' : 'clear'}</button>
          </div>

          <div ref={chatLogRef} style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {messages.map(msg => <ChatMessage key={msg.id} msg={msg} agents={AGENTS} lang={lang} />)}
            {isLoading && (
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(124,111,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 600, fontFamily: 'monospace', color: '#7c6fff', flexShrink: 0 }}>VGA</div>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '10px 13px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10 }}>
                  {[0, 0.2, 0.4].map((d, i) => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: '#7c6fff', animation: `tdot 1.2s ${d}s infinite` }} />)}
                </div>
              </div>
            )}
          </div>

          <div style={{ padding: '14px 16px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: 10, background: '#0a0a0f', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#3a3a4a', letterSpacing: '0.05em' }}>{lang === 'TR' ? 'MOD:' : 'MODE:'}</span>
              <div style={{ display: 'flex', background: '#111118', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: 2, gap: 2 }}>
                {(['text', 'voice'] as Mode[]).map(m => (
                  <button key={m} onClick={() => setMode(m)} style={{ fontSize: 10, fontFamily: 'monospace', padding: '3px 10px', borderRadius: 4, border: 'none', background: mode === m ? 'rgba(124,111,255,0.15)' : 'transparent', color: mode === m ? '#7c6fff' : '#6b6b80', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
                    {m === 'text' ? '⌨' : '🎙'} {m === 'text' ? (lang === 'TR' ? 'metin' : 'text') : (lang === 'TR' ? 'ses' : 'voice')}
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
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                placeholder={lang === 'TR' ? 'Konuyu yazın veya domain girin...' : 'Type a topic or domain...'}
                rows={1}
                style={{ flex: 1, resize: 'none', fontFamily: 'Inter, sans-serif', fontSize: 13, minHeight: 40, maxHeight: 100, padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)', background: '#111118', color: '#e8e8f0', lineHeight: 1.5, outline: 'none' }}
              />
              {mode === 'voice' && (
                <button onClick={toggleMic} style={{ width: 40, height: 40, borderRadius: 10, border: `1px solid ${isRecording ? '#ef4444' : 'rgba(255,255,255,0.07)'}`, background: isRecording ? 'rgba(239,68,68,0.15)' : '#111118', color: isRecording ? '#ef4444' : '#6b6b80', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                  {isRecording ? '⏹' : '🎙'}
                </button>
              )}
              <button onClick={sendMessage} disabled={isLoading} style={{ width: 40, height: 40, borderRadius: 10, border: 'none', background: '#7c6fff', color: 'white', cursor: isLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0, opacity: isLoading ? 0.5 : 1 }}>↑</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
        @keyframes bar { 0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)} }
        @keyframes tdot { 0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-5px);opacity:1} }
        @keyframes speakRing { 0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(1.02)} }
        @keyframes soundBar { 0%,100%{transform:scaleY(0.3)}50%{transform:scaleY(1)} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.07); border-radius: 2px; }
      `}</style>
    </div>
  );
}

function AgentCard({ agent, isSpeaking, onClick, isDashed }: { agent: Agent; isSpeaking: boolean; onClick: () => void; isDashed?: boolean }) {
  return (
    <div
      onClick={onClick}
      title={agent.desc}
      style={{
        background: isSpeaking ? `rgba(124,111,255,0.08)` : '#111118',
        border: `${isDashed ? '1px dashed' : '1px solid'} ${isSpeaking ? '#7c6fff' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 12,
        padding: '14px 10px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isSpeaking ? '0 0 20px rgba(124,111,255,0.15)' : 'none',
        transition: 'all 0.2s',
      }}
    >
      {isSpeaking && (
        <div style={{ position: 'absolute', inset: -1, borderRadius: 13, border: '2px solid #7c6fff', animation: 'speakRing 1.5s ease-in-out infinite', pointerEvents: 'none' }} />
      )}
      <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, fontFamily: 'monospace', background: agent.bg, color: agent.color, transform: isSpeaking ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.2s' }}>{agent.label}</div>
      <div style={{ fontSize: 11, fontWeight: 600, fontFamily: 'monospace', color: isSpeaking ? '#7c6fff' : '#e8e8f0', letterSpacing: '0.05em' }}>{agent.id}</div>
      <div style={{ fontSize: 9, color: '#6b6b80', textAlign: 'center', lineHeight: 1.3 }}>{agent.desc}</div>
      {isSpeaking && (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 12, position: 'absolute', bottom: 8, right: 8 }}>
          {[4, 8, 12, 6].map((h, i) => (
            <div key={i} style={{ width: 2, height: h, background: '#7c6fff', borderRadius: 1, animation: `soundBar 0.8s ${i * 0.15}s ease-in-out infinite` }} />
          ))}
        </div>
      )}
    </div>
  );
}

function ChatMessage({ msg, agents, lang }: { msg: Message; agents: typeof AGENTS; lang: Lang }) {
  if (msg.isSystem) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#3a3a4a', textAlign: 'center' }}>{msg.text}</div>
      </div>
    );
  }

  const agent = agents.find(a => a.id === msg.agentId);
  const isUser = msg.isUser;

  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flexDirection: isUser ? 'row-reverse' : 'row' }}>
      <div style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 600, fontFamily: 'monospace', background: isUser ? 'rgba(124,111,255,0.15)' : (agent?.bg || 'rgba(255,255,255,0.1)'), color: isUser ? '#7c6fff' : (agent?.color || '#888'), flexShrink: 0, marginTop: 2 }}>
        {isUser ? (lang === 'TR' ? 'SİZ' : 'YOU') : (agent?.label || msg.agentId?.slice(0,3) || '?')}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4, flexDirection: isUser ? 'row-reverse' : 'row' }}>
          <span style={{ fontSize: 10, fontWeight: 600, fontFamily: 'monospace', letterSpacing: '0.05em', color: isUser ? '#7c6fff' : (agent?.color || '#888') }}>{isUser ? (lang === 'TR' ? 'Siz' : 'You') : msg.agentId}</span>
          <span style={{ fontSize: 10, color: '#3a3a4a', fontFamily: 'monospace' }}>{msg.time}</span>
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.6, padding: '10px 13px', borderRadius: 10, border: '1px solid', borderColor: isUser ? 'rgba(124,111,255,0.2)' : 'rgba(255,255,255,0.07)', background: isUser ? 'rgba(124,111,255,0.12)' : 'rgba(255,255,255,0.03)', color: isUser ? '#c4beff' : '#e8e8f0' }}>
          {msg.text}
        </div>
      </div>
    </div>
  );
}
