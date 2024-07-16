import React, { useState } from 'react';
import './Accordion.module.css';
const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (React.createElement("div", { className: "accordion" },
        React.createElement("button", { onClick: () => setIsOpen(!isOpen), className: "accordion-title" }, title),
        isOpen && React.createElement("div", { className: "accordion-content" }, content)));
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map