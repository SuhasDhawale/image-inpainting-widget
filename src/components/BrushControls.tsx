import React from 'react';

interface BrushControlsProps {
  brushSize: number;
  onBrushSizeChange: (size: number) => void;
}

export const BrushControls: React.FC<BrushControlsProps> = ({ brushSize, onBrushSizeChange }) => {
  return (
    <div>
      <label htmlFor="brushSize">Brush Size: </label>
      <input
        type="range"
        id="brushSize"
        min={1}
        max={50}
        value={brushSize}
        onChange={(e) => onBrushSizeChange(parseInt(e.target.value))}
      />
      <span>{brushSize}px</span>
    </div>
  );
};

