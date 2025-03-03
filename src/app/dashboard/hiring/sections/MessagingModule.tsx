import React, { useState } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

interface MessagingModuleProps {
  employeeName: string;
  onClose: () => void;
}

const MessagingModule: React.FC<MessagingModuleProps> = ({
  employeeName,
  onClose,
}) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: 'Employee', text: 'Hello, I’m excited to work with you!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'Employer', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold mb-4">Chat with {employeeName}</h2>

        {/* Chat Area */}
        <div className="h-64 overflow-y-auto border rounded p-4 bg-gray-50 space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === 'Employer'
                  ? 'text-right'
                  : 'text-left text-blue-600'
              }`}
            >
              <p
                className={`inline-block px-4 py-2 rounded ${
                  message.sender === 'Employer'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100'
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
          >
            <FaPaperPlane className="mr-2" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagingModule;
