import React from 'react';
import './Avatar.module.css';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 50 }) => {
  return <img src={src} alt={alt} width={size} height={size} style={{ borderRadius: '50%' }} />;
};

export default Avatar;
