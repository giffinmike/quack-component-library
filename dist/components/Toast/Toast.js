import React, { useState, useEffect } from 'react';
import './Toast.module.css';
const Toast = ({ message, duration = 3000 }) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);
    if (!visible)
        return null;
    return (React.createElement("div", { style: { position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '4px' } }, message));
};
export default Toast;
//# sourceMappingURL=Toast.js.map