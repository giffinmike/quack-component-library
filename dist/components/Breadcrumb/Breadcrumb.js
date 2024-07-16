import React from 'react';
import './Breadcrumb.module.css';
const Breadcrumb = ({ items }) => {
    return (React.createElement("nav", null, items.map((item, index) => (React.createElement("span", { key: index },
        React.createElement("a", { href: item.href }, item.label),
        index < items.length - 1 && ' / ')))));
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map