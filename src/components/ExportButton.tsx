import React from 'react';

interface ExportButtonProps {
  maskImage: string | null;
  originalImage: string | null;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ maskImage, originalImage }) => {
  const handleExport = () => {
    if (maskImage && originalImage) {
      console.log('Exporting:', { originalImage, maskImage });
      const link = document.createElement('a');
      link.href = maskImage;
      link.download = 'mask.png';
      link.click();
    }
  };

  return (
    <button onClick={handleExport} disabled={!maskImage || !originalImage}>
      Export Mask
    </button>
  );
};

