import React from 'react';

interface Notification {
  id: number;
  message: string;
  timestamp: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    message: 'Your application for Software Engineer at TechCorp has been submitted successfully.',
    timestamp: '2025-01-02 10:30 AM',
    type: 'success',
  },
  {
    id: 2,
    message: 'New job matching your preferences: Frontend Developer at CodeWorks.',
    timestamp: '2025-01-02 09:45 AM',
    type: 'info',
  },
  {
    id: 3,
    message: 'Reminder: Your application deadline for Data Analyst at DataWorks is tomorrow.',
    timestamp: '2025-01-01 03:00 PM',
    type: 'warning',
  },
  {
    id: 4,
    message: 'Error: Failed to submit your application for Product Manager at Innovate Ltd.',
    timestamp: '2025-01-01 12:15 PM',
    type: 'error',
  },
];

const Notifications: React.FC = () => {
  const notifications = mockNotifications;

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'info':
        return 'bg-blue-100 text-blue-700';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      default:
        return '';
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">You have no notifications.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-md ${getNotificationStyle(notification.type)}`}
            >
              <p className="font-semibold">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.timestamp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
