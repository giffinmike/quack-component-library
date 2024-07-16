import React, { useState } from 'react';
import './Dropdown.module.css';

interface DropdownProps {
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{selectedItem}</button>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => { setSelectedItem(item); setIsOpen(false); }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
