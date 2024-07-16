import React from 'react';
import './Card.module.css';
const Card = ({ title, description, imageUrl, children }) => {
    return (React.createElement("div", { className: "card" },
        imageUrl && React.createElement("img", { src: imageUrl, alt: title, className: "card-image" }),
        React.createElement("div", { className: "card-content" },
            title && React.createElement("h3", { className: "card-title" }, title),
            description && React.createElement("p", { className: "card-description" }, description),
            children)));
};
export default Card;
//# sourceMappingURL=Card.js.map