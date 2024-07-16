import React, { ReactNode } from 'react';
import './Button.module.css';

interface ButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '', children }) => {
  return (
    <button className="title" onClick={onClick}>
      {children || label}
    </button>
  );
};

export default Button;
