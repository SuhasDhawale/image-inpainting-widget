import React, { useState } from 'react';
import { ImageUploader } from './ImageUploader';
import { Canvas } from './Canvas';
import { BrushControls } from './BrushControls';
import { ExportButton } from './ExportButton';

export const ImageInpaintingWidget: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [brushSize, setBrushSize] = useState(10);
  const [maskImage, setMaskImage] = useState<string | null>(null);

  const handleImageUpload = (uploadedImage: string) => {
    setImage(uploadedImage);
    setMaskImage(null);
  };

  const handleMaskUpdate = (updatedMask: string) => {
    setMaskImage(updatedMask);
  };

  return (
    <div>
      <h1>Image Inpainting Widget</h1>
      <ImageUploader onImageUpload={handleImageUpload} />
      {image && (
        <>
          <Canvas
            image={image}
            brushSize={brushSize}
            onMaskUpdate={handleMaskUpdate}
          />
          <BrushControls brushSize={brushSize} onBrushSizeChange={setBrushSize} />
          <ExportButton maskImage={maskImage} originalImage={image} />
          {maskImage && (
            <div>
              <h2>Mask Preview</h2>
              <img src={maskImage} alt="Mask" style={{ border: '1px solid #ccc' }} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

