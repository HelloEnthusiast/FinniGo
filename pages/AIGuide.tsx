
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2, Info } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIGuide: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Moi! I am FinniGuide, your personal AI assistant for everything related to student life in Finland. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMessage, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 h-[70vh] flex flex-col">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
              <Sparkles className="text-blue-900" />
              FinniGuide AI
            </h1>
            <p className="text-slate-500 text-sm">Real-time answers for your life in Finland</p>
          </div>
          {/* <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-900 rounded-lg text-xs font-bold">
            <Info size={14} />
            Powered by Gemini
          </div> */}
        </div>

        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col overflow-hidden">
          {/* Chat Window */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  msg.role === 'user' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-900'
                }`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-blue-900 text-white rounded-tr-none' 
                  : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                  <Bot size={20} />
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 flex items-center gap-2">
                  <Loader2 className="animate-spin text-blue-900" size={18} />
                  <span className="text-xs text-slate-400 font-medium">FinniGuide is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about housing, residence permits, or student life..."
                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all pr-14 shadow-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-3 bg-blue-900 text-white rounded-xl hover:bg-blue-800 transition-colors disabled:bg-slate-300"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
              {['HOAS housing tips', 'Bank account setup', 'Part-time jobs', 'Weather in Helsinki'].map(tip => (
                <button 
                  key={tip}
                  onClick={() => setInput(tip)}
                  className="whitespace-nowrap px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 hover:border-blue-900 hover:text-blue-900 transition-colors"
                >
                  {tip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGuide;
