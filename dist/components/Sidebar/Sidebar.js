import React from 'react';
import './Sidebar.module.css';
const Sidebar = ({ links }) => {
    return (React.createElement("div", { style: { width: '200px', backgroundColor: '#f4f4f4', padding: '10px' } }, links.map((link, index) => (React.createElement("a", { key: index, href: link.href, style: { display: 'block', padding: '10px 0', textDecoration: 'none', color: '#333' } }, link.label)))));
};
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map