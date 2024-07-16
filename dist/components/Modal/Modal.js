import React from 'react';
import './Modal.module.css';
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen)
        return null;
    return (React.createElement("div", { style: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' } },
        React.createElement("div", { style: { backgroundColor: '#fff', margin: '10% auto', padding: '20px', width: '80%' } },
            React.createElement("button", { onClick: onClose }, "Close"),
            children)));
};
export default Modal;
//# sourceMappingURL=Modal.js.map