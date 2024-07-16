import React from 'react';
import './Slider.module.css';
const Slider = ({ value, min, max, onChange }) => {
    return (React.createElement("input", { type: "range", value: value, min: min, max: max, onChange: (e) => onChange(Number(e.target.value)) }));
};
export default Slider;
//# sourceMappingURL=Slider.js.map