import { X, Minimize2 } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
}

export default function ChatHeader({ onClose, onMinimize }: ChatHeaderProps) {
  return (
    <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        <h3 className="font-semibold">Bootsuche</h3>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onMinimize}
          className="p-1 hover:bg-primary-700 rounded transition-colors"
          aria-label="Minimieren"
        >
          <Minimize2 size={18} />
        </button>
        <button
          onClick={onClose}
          className="p-1 hover:bg-primary-700 rounded transition-colors"
          aria-label="Schließen"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

