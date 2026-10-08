import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "./Footer";
import { SITE } from "../data/content";

import { API, HAS_BACKEND } from "../lib/api";
import { localAnswer } from "../lib/localChat";

const GREETING = HAS_BACKEND
  ? "Hi! I'm Kresha AI. Ask me anything about growing your business — services, pricing, timelines. Tamil-லயும் கேட்கலாம்!"
  : "Hi! Ask me about our services, pricing, timelines or reports — or tap WhatsApp to talk to our team directly. Tamil-லயும் WhatsApp-ல் பேசலாம்!";

const QUICK = HAS_BACKEND
  ? ["What services do you offer?", "How much does SEO cost?", "SEO விலை எவ்வளவு?", "Can you build my website?"]
  : ["What services do you offer?", "How much does it cost?", "Do you work in Tamil?", "Which areas do you serve?"];

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", text: GREETING }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [intent, setIntent] = useState(false);
  const [citations, setCitations] = useState([]);
  const [sessionId] = useState(() => `s-${Math.random().toString(36).slice(2)}${Date.now()}`);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg || busy) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: msg }, { role: "assistant", text: "" }]);
    setBusy(true);
    if (!HAS_BACKEND) {
      const reply = localAnswer(msg);
      setTimeout(() => {
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", text: reply.text };
          return copy;
        });
        if (reply.handoff) setIntent(true);
        setBusy(false);
      }, 450);
      return;
    }
    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, session_id: sessionId }),
      });
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const parts = buf.split("\n\n");
        buf = parts.pop();
        for (const part of parts) {
          if (!part.startsWith("data: ")) continue;
          const data = JSON.parse(part.slice(6));
          if (data.delta) {
            setMessages((m) => {
              const copy = [...m];
              copy[copy.length - 1] = { role: "assistant", text: copy[copy.length - 1].text + data.delta };
              return copy;
            });
          }
          if (typeof data.intent === "number" && data.intent >= 0.6) setIntent(true);
          if (Array.isArray(data.citations) && data.citations.length) setCitations(data.citations);
        }
      }
    } catch (e) {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", text: "Connection issue — please try again or WhatsApp us." };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        data-testid="chat-bubble-button"
        aria-label="Chat with Kresha AI"
        className="fixed bottom-5 left-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#064A91] text-white shadow-[0_10px_30px_rgba(6,74,145,0.45)] transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        {open ? <X size={24} /> : <Sparkles size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            data-testid="chat-panel"
            className="fixed bottom-[84px] left-4 z-[60] flex h-[480px] w-[calc(100vw-32px)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0_24px_70px_rgba(6,74,145,0.28)] sm:left-5"
          >
            <div className="noise flex items-center gap-3 bg-[#123B70] px-4 py-3.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFBD19] text-[#064A91]">
                <Sparkles size={17} />
              </span>
              <div className="flex-1">
                <p className="text-[14.5px] font-bold leading-tight !text-white">{HAS_BACKEND ? "Kresha AI" : "Kresha Assistant"}</p>
                <p className="text-[11px] text-white/60">{HAS_BACKEND ? "Tamil + English · instant answers" : "Quick answers · WhatsApp for the rest"}</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" data-testid="chat-close-button" className="text-white/70 transition-colors duration-200 hover:text-white">
                <X size={19} />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-[#F5F7FA] px-4 py-4" data-testid="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`} data-testid={`chat-message-${m.role}-${i}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap ${
                    m.role === "user" ? "rounded-br-md bg-[#064A91] text-white" : "rounded-bl-md bg-white text-[#3D4E6B] border border-[#E5EAF2]"
                  }`}>
                    {m.text || (busy && i === messages.length - 1 ? <Loader2 size={15} className="animate-spin text-[#159BD7]" /> : "")}
                  </div>
                </div>
              ))}
              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-1" data-testid="chat-quick-replies">
                  {QUICK.map((q) => (
                    <button key={q} onClick={() => send(q)} data-testid={`chat-quick-${q.slice(0, 12).replace(/\s+/g, "-").toLowerCase()}`} className="rounded-full border border-[#159BD7]/40 bg-white px-3 py-1.5 text-[12px] font-semibold text-[#159BD7] transition-colors duration-200 hover:bg-[#159BD7] hover:text-white">
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {citations.length > 0 && (
                <div className="rounded-xl border border-[#E5EAF2] bg-white p-3 text-[11.5px]" data-testid="chat-sources">
                  <p className="font-bold text-[#064A91]">Sources from the web</p>
                  {citations.slice(0, 3).map((u) => (
                    <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="mt-1 block truncate text-[#159BD7] underline underline-offset-2">
                      {u.replace(/^https?:\/\//, "")}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {intent && (
              <div className="border-t border-[#FFBD19] bg-[#FFBD19]/15 p-3" data-testid="chat-intent-handoff">
                <p className="text-[12px] font-bold text-[#064A91]">Looks like you're ready to grow — skip the queue.</p>
                <a href={SITE.wa} target="_blank" rel="noopener noreferrer" data-testid="chat-intent-whatsapp-button" className="btn btn-wa mt-2 min-h-[42px] w-full text-[13px]">
                  <WhatsAppIcon size={15} /> Chat on WhatsApp now
                </a>
              </div>
            )}

            <div className="border-t border-[#E5EAF2] bg-white p-3">
              <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex items-center gap-2" data-testid="chat-input-form">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  data-testid="chat-input"
                  placeholder="Type your question…"
                  className="input min-h-[44px] flex-1 py-2"
                  maxLength={600}
                />
                <button type="submit" disabled={busy || !input.trim()} data-testid="chat-send-button" aria-label="Send message" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFBD19] text-[#064A91] transition-colors duration-200 hover:bg-[#FFCA3D] disabled:opacity-50">
                  <Send size={17} />
                </button>
              </form>
              <a href={SITE.wa} target="_blank" rel="noopener noreferrer" data-testid="chat-whatsapp-handoff" className="mt-2 flex items-center justify-center gap-1.5 text-[11.5px] font-semibold text-[#4B5563] transition-colors duration-200 hover:text-[#1FAF4F]">
                <WhatsAppIcon size={13} /> Prefer humans? WhatsApp us — {SITE.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
