import React from 'react';
import './ProgressBar.module.css';
const ProgressBar = ({ progress }) => {
    return (React.createElement("div", { style: { width: '100%', backgroundColor: '#e0e0e0', borderRadius: '8px' } },
        React.createElement("div", { style: { width: `${progress}%`, backgroundColor: '#76c7c0', height: '24px', borderRadius: '8px' } })));
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map