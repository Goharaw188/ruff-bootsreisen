import { ChatMessage as ChatMessageType } from '@/lib/types';
import BoatResultCard from './BoatResultCard';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  if (message.type === 'boat-result' && message.boatData) {
    return <BoatResultCard boat={message.boatData} />;
  }

  const isUser = message.type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-primary-600 text-white'
            : 'bg-white text-gray-800 border border-gray-200'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        <p className={`text-xs mt-1 ${isUser ? 'text-primary-100' : 'text-gray-500'}`}>
          {message.timestamp.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  );
}

