"use client";

import { useEffect, useRef, useState } from "react";

type ChatRole = "user" | "assistant" | "system";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

export function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = (await res.json()) as ChatMessage | { error?: string };

      if (!res.ok) {
        const errText =
          "error" in data && typeof data.error === "string"
            ? data.error
            : "Request failed";
        setMessages([
          ...newMessages,
          { role: "assistant", content: `Error: ${errText}` },
        ]);
        return;
      }

      if ("role" in data && "content" in data && data.content != null) {
        setMessages([
          ...newMessages,
          { role: data.role as ChatRole, content: String(data.content) },
        ]);
      }
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#071225] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] md:w-96">
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-500/20 to-transparent px-4 py-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-white">
          AI Forge Strategist
        </h3>
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
          aria-hidden
        />
      </div>

      <div
        ref={scrollRef}
        className="h-80 space-y-4 overflow-y-auto bg-[#050a14]/60 p-4"
      >
        {messages.length === 0 && (
          <p className="mt-10 text-center text-xs text-slate-500">
            Ask how the $497 Profit Leak Audit can stop your business from
            bleeding cash.
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-xl p-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-cyan-500 text-[#050a14] font-medium"
                  : "border border-white/10 bg-white/[0.06] text-slate-200"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <p className="animate-pulse text-xs text-slate-500">
            Strategist is typing…
          </p>
        )}
      </div>

      <div className="flex gap-2 border-t border-white/10 bg-[#071225] p-3">
        <input
          className="flex-1 rounded-lg border border-transparent bg-white/5 p-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void handleSend();
            }
          }}
          placeholder="Type your message…"
          aria-label="Chat message"
        />
        <button
          type="button"
          onClick={() => void handleSend()}
          disabled={loading}
          className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-[#050a14] transition hover:bg-cyan-300 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
