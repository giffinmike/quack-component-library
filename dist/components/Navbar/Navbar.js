import React from 'react';
import './Navbar.module.css';
const Navbar = ({ links }) => {
    return (React.createElement("nav", { style: { display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#333', color: '#fff' } }, links.map((link, index) => (React.createElement("a", { key: index, href: link.href, style: { color: '#fff', textDecoration: 'none' } }, link.label)))));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map