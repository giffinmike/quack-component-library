import React from 'react';
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
declare const NotificationPanel: React.FC<NotificationPanelProps>;
export default NotificationPanel;
//# sourceMappingURL=NotificationPanel.d.ts.map