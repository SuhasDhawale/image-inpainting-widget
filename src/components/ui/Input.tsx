import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={props.id} className="font-semibold">
        {label}
      </label>
      <input
        className="border border-gray-300 rounded px-3 py-2"
        {...props}
      />
    </div>
  );
};

export default Input;

