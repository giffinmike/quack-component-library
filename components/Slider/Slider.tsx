import React from 'react';
import './Slider.module.css';

interface SliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, min, max, onChange }) => {
  return (
    <input type="range" value={value} min={min} max={max} onChange={(e) => onChange(Number(e.target.value))} />
  );
};

export default Slider;
