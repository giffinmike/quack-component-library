import React from 'react';
import Alert from '../Alert/Alert';
import Button from '../Button/Button';
import './NotificationPanel.module.css';

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

interface NotificationPanelProps {
  notifications: Notification[];
  onClearAll: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ notifications, onClearAll }) => {
  return (
    <div className="notification-panel">
      {notifications.map((notification) => (
        <Alert key={notification.id} message={notification.message} type={notification.type} />
      ))}
      <Button label="Clear All" onClick={onClearAll} className="clear-button" />
    </div>
  );
};

export default NotificationPanel;

//