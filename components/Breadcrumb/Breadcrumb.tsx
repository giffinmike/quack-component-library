import React from 'react';
import './Breadcrumb.module.css';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav>
      {items.map((item, index) => (
        <span key={index}>
          <a href={item.href}>{item.label}</a>
          {index < items.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
