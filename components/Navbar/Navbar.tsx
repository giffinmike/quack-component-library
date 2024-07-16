import React from 'react';
import './Navbar.module.css';

interface NavbarProps {
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      {links.map((link, index) => (
        <a key={index} href={link.href} style={{ color: '#fff', textDecoration: 'none' }}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
