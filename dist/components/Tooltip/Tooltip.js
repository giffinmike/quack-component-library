import React, { useState } from 'react';
import './Tooltip.module.css';
const Tooltip = ({ text, children }) => {
    const [visible, setVisible] = useState(false);
    return (React.createElement("div", { style: { position: 'relative', display: 'inline-block' }, onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false) },
        children,
        visible && React.createElement("div", { style: { position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#333', color: '#fff', padding: '5px', borderRadius: '4px', whiteSpace: 'nowrap' } }, text)));
};
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map