import React, { useState } from 'react';
import './Dropdown.module.css';
const Dropdown = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (React.createElement("div", null,
        React.createElement("button", { onClick: () => setIsOpen(!isOpen) }, selectedItem),
        isOpen && (React.createElement("ul", null, items.map((item, index) => (React.createElement("li", { key: index, onClick: () => { setSelectedItem(item); setIsOpen(false); } }, item)))))));
};
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map