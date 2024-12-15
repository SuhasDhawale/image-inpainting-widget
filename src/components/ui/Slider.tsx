import React, { InputHTMLAttributes } from 'react';

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Slider: React.FC<SliderProps> = ({ label, ...props }) => {
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor={props.id} className="font-semibold whitespace-nowrap">
        {label}:
      </label>
      <input
        type="range"
        className="w-full"
        {...props}
      />
      <span className="w-12 text-right">{props.value}px</span>
    </div>
  );
};

export default Slider;

