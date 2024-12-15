import React from 'react';

interface ImageDisplayProps {
  originalImage: string | null;
  maskImage: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImage, maskImage }) => {
  if (!originalImage || !maskImage) {
    return null;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      <div>
        <h3>Original Image</h3>
        <img src={originalImage} alt="Original" style={{ maxWidth: '300px' }} />
      </div>
      <div>
        <h3>Mask Image</h3>
        <img src={maskImage} alt="Mask" style={{ maxWidth: '300px' }} />
      </div>
    </div>
  );
};

export default ImageDisplay;

