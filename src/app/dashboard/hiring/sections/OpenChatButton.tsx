import React, { useState } from 'react';
import MessagingModule from './MessagingModule';

const OpenChatButton: React.FC<{ employeeName: string }> = ({
  employeeName,
}) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsChatOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Chat with {employeeName}
      </button>
      {isChatOpen && (
        <MessagingModule
          employeeName={employeeName}
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </div>
  );
};

export default OpenChatButton;
