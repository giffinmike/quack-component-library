import React from 'react';
import './Badge.module.css';
const Badge = ({ label, className = '' }) => {
    return (React.createElement("span", { className: `badge ${className}` }, label));
};
export default Badge;
//# sourceMappingURL=Badge.js.map