'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { ChatMessage as ChatMessageType } from '@/lib/types';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hallo! Ich helfe Ihnen gerne bei der Suche nach dem perfekten Boot. Bitte teilen Sie mir mit:\n\n• Reiseziel (z.B. Burgund, Canal du Midi)\n• Anreisedatum\n• Abreisedatum\n• Anzahl der Gäste',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>(`session-${Date.now()}`);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: ChatMessageType = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content.trim(),
          sessionId: sessionIdRef.current,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      // Add bot response
      const botMessage: ChatMessageType = {
        id: `bot-${Date.now()}`,
        type: data.boatResults ? 'boat-result' : 'bot',
        content: data.message || data.text || 'Ich habe Ihre Anfrage erhalten.',
        timestamp: new Date(),
        boatData: data.boatResults?.[0] || undefined,
      };

      setMessages((prev) => [...prev, botMessage]);

      // If there are multiple boat results, add them as separate messages
      if (data.boatResults && data.boatResults.length > 1) {
        data.boatResults.slice(1).forEach((boat: any, index: number) => {
          setTimeout(() => {
            const additionalBoatMessage: ChatMessageType = {
              id: `boat-${Date.now()}-${index}`,
              type: 'boat-result',
              content: '',
              timestamp: new Date(),
              boatData: boat,
            };
            setMessages((prev) => [...prev, additionalBoatMessage]);
          }, 300 * (index + 1));
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessageType = {
        id: `error-${Date.now()}`,
        type: 'bot',
        content: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('chat-messages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        })));
      } catch (e) {
        console.error('Error loading chat history:', e);
      }
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('chat-messages', JSON.stringify(messages));
    }
  }, [messages]);

  return (
    <>
      {/* Chat Trigger Button */}
      <button
        id="chat-widget-trigger"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all ${
          isOpen ? 'hidden' : 'flex items-center space-x-2'
        }`}
        aria-label="Chat öffnen"
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline ml-2 font-medium">Haben Sie Fragen?</span>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          <ChatHeader onClose={() => setIsOpen(false)} onMinimize={() => setIsOpen(false)} />

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 chat-scrollbar">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2 text-gray-500">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-sm">Bot schreibt...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <ChatInput onSend={sendMessage} disabled={isLoading} />
        </div>
      )}
    </>
  );
}

