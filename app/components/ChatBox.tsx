'use client';

import React, { useState, useEffect, useRef } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data: Message = await res.json();
      setMessages([...newMessages, data]);
    } catch (err) {
      console.error('Chat Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50">
      <div className="bg-blue-600 p-4 flex justify-between items-center">
        <h3 className="text-white font-bold text-sm tracking-wide">AI FORGE STRATEGIST</h3>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      <div ref={scrollRef} className="h-80 p-4 overflow-y-auto space-y-4 bg-slate-900/50">
        {messages.length === 0 && (
          <div className="text-slate-500 text-xs text-center mt-10">
            Ask how the $497 Profit Leak Audit can stop your business from bleeding cash.
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] p-3 rounded-xl text-sm ${
                m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-200'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-slate-500 text-xs animate-pulse">Strategist is typing...</div>
        )}
      </div>

      <div className="p-3 border-t border-slate-800 bg-slate-900 flex gap-2">
        <input
          className="flex-1 bg-slate-800 text-white p-2 rounded-lg outline-none text-sm border border-transparent focus:border-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
        >
          SEND
        </button>
      </div>
    </div>
  );
};
