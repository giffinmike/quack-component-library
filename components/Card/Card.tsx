import React, { ReactNode } from 'react';
import './Card.module.css';

interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
