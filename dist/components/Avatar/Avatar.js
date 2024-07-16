import React from 'react';
import './Avatar.module.css';
const Avatar = ({ src, alt, size = 50 }) => {
    return React.createElement("img", { src: src, alt: alt, width: size, height: size, style: { borderRadius: '50%' } });
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map