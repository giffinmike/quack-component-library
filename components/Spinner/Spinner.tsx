import React from 'react';
import './Spinner.module.css';

const Spinner: React.FC = () => {
  return (
    <div style={{ display: 'inline-block', width: '50px', height: '50px', border: '3px solid rgba(0, 0, 0, 0.1)', borderRadius: '50%', borderTopColor: '#333', animation: 'spin 1s linear infinite' }}></div>
  );
};

export default Spinner;
