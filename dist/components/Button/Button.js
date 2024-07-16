import React from 'react';
import './Button.module.css';
const Button = ({ label, onClick, className = '', children }) => {
    return (React.createElement("button", { className: "title", onClick: onClick }, children || label));
};
export default Button;
//# sourceMappingURL=Button.js.map