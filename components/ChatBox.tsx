"use client";

import { useEffect, useRef, useState } from "react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatApiResponse = ChatMessage | { error: string };

const isChatMessage = (value: unknown): value is ChatMessage => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    (candidate.role === "user" || candidate.role === "assistant") &&
    typeof candidate.content === "string"
  );
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
    if (!input.trim() || loading) {
      return;
    }

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

      const data = (await res.json()) as ChatApiResponse;

      if (!res.ok || !isChatMessage(data)) {
        const errorText =
          "error" in (data as Record<string, unknown>)
            ? String((data as { error: unknown }).error)
            : "Unable to get a response right now.";
        const fallbackMessage: ChatMessage = {
          role: "assistant",
          content: `Sorry, something went wrong: ${errorText}`,
        };
        setMessages([...newMessages, fallbackMessage]);
        return;
      }

      setMessages([...newMessages, data]);
    } catch {
      const fallbackMessage: ChatMessage = {
        role: "assistant",
        content: "Sorry, there was a network error. Please try again.",
      };
      setMessages([...newMessages, fallbackMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl md:w-96">
      <div className="flex items-center justify-between bg-blue-600 p-4">
        <h3 className="text-sm font-bold tracking-wide text-white">
          AI FORGE STRATEGIST
        </h3>
        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
      </div>

      <div
        ref={scrollRef}
        className="h-80 space-y-4 overflow-y-auto bg-slate-900/50 p-4"
      >
        {messages.length === 0 && (
          <div className="mt-10 text-center text-xs text-slate-500">
            Ask how the $497 Profit Leak Audit can stop your business from
            bleeding cash.
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-xl p-3 text-sm ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-200"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-xs text-slate-500 animate-pulse">
            Strategist is typing...
          </div>
        )}
      </div>

      <div className="flex gap-2 border-t border-slate-800 bg-slate-900 p-3">
        <input
          className="flex-1 rounded-lg border border-transparent bg-slate-800 p-2 text-sm text-white outline-none focus:border-blue-500"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              void handleSend();
            }
          }}
          placeholder="Type your message..."
        />
        <button
          type="button"
          onClick={() => void handleSend()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={loading}
        >
          SEND
        </button>
      </div>
    </div>
  );
}
