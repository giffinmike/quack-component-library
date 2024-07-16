import React, { ReactNode } from 'react';
import './Card.module.css';
interface CardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    children?: ReactNode;
}
declare const Card: React.FC<CardProps>;
export default Card;
//# sourceMappingURL=Card.d.ts.map