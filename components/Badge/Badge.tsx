import React from 'react';
import './Badge.module.css';

interface BadgeProps {
  label: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, className = '' }) => {
  return (
    <span className={`badge ${className}`}>
      {label}
    </span>
  );
};

export default Badge;
