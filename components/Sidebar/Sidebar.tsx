import React from 'react';
import './Sidebar.module.css';

interface SidebarProps {
  links: { label: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '10px' }}>
      {links.map((link, index) => (
        <a key={index} href={link.href} style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: '#333' }}>
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
