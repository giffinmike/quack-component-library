import React from 'react';
import Alert from '../Alert/Alert';
import Button from '../Button/Button';
import './NotificationPanel.module.css';
const NotificationPanel = ({ notifications, onClearAll }) => {
    return (React.createElement("div", { className: "notification-panel" },
        notifications.map((notification) => (React.createElement(Alert, { key: notification.id, message: notification.message, type: notification.type }))),
        React.createElement(Button, { label: "Clear All", onClick: onClearAll, className: "clear-button" })));
};
export default NotificationPanel;
//# sourceMappingURL=NotificationPanel.js.map