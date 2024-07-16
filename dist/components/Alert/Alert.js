import React from 'react';
import './Alert.module.css';
const Alert = ({ message, type }) => {
    return React.createElement("div", { className: `alert alert-${type}` }, message);
};
export default Alert;
//# sourceMappingURL=Alert.js.map