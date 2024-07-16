import React, { useState } from 'react';
import './Tooltip.module.css';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#333', color: '#fff', padding: '5px', borderRadius: '4px', whiteSpace: 'nowrap' }}>{text}</div>}
    </div>
  );
};

export default Tooltip;
