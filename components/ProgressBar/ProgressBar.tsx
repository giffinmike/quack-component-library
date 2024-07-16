import React from 'react';
import './ProgressBar.module.css';

interface ProgressBarProps {
  progress: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '8px' }}>
      <div style={{ width: `${progress}%`, backgroundColor: '#76c7c0', height: '24px', borderRadius: '8px' }}></div>
    </div>
  );
};

export default ProgressBar;
