import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import MessagingModule from './MessagingModule';

interface MessageThread {
  id: number;
  name: string;
  lastMessage: string;
  unreadCount: number;
  lastActive: string;
}

const MessagesSection: React.FC = () => {
  const [threads] = useState<MessageThread[]>([
    { id: 1, name: 'John Doe', lastMessage: 'Let’s connect!', unreadCount: 2, lastActive: '10m ago' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Thank you!', unreadCount: 0, lastActive: '1h ago' },
  ]);
  const [activeThread, setActiveThread] = useState<MessageThread | null>(null);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/4 border-r bg-gray-100 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Messages</h2>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search conversations"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <FaSearch className="absolute top-3 right-4 text-gray-400" />
          </div>
        </div>
        <div className="space-y-4">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className={`p-3 rounded-lg cursor-pointer ${
                activeThread?.id === thread.id ? 'bg-blue-100' : 'hover:bg-gray-200'
              }`}
              onClick={() => setActiveThread(thread)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold">{thread.name}</h3>
                <span className="text-xs text-gray-500">{thread.lastActive}</span>
              </div>
              <p className="text-sm text-gray-600">
                {thread.lastMessage}
              </p>
              {thread.unreadCount > 0 && (
                <span className="text-xs bg-blue-500 text-white rounded-full px-2">
                  {thread.unreadCount}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4">
        {activeThread ? (
          <MessagingModule
            employeeName={activeThread.name}
            onClose={() => setActiveThread(null)}
          />
        ) : (
          <div className="h-full flex justify-center items-center text-gray-400">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesSection;
