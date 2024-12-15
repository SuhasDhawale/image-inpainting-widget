declare module 'react-canvas-draw' {
    import { Component } from 'react';
  
    export interface CanvasDrawProps {
      onChange?: (canvas: CanvasDraw) => void;
      loadTimeOffset?: number;
      lazyRadius?: number;
      brushRadius?: number;
      brushColor?: string;
      catenaryColor?: string;
      gridColor?: string;
      backgroundColor?: string;
      hideGrid?: boolean;
      canvasWidth?: number;
      canvasHeight?: number;
      disabled?: boolean;
      imgSrc?: string;
      saveData?: string;
      immediateLoading?: boolean;
      hideInterface?: boolean;
      className?: string;
      style?: React.CSSProperties;
    }
  
    export default class CanvasDraw extends Component<CanvasDrawProps> {
      canvas: {
        drawing: HTMLCanvasElement;
        temp: HTMLCanvasElement;
      };
      constructor(props: CanvasDrawProps);
      getSaveData(): string;
      loadSaveData(saveData: string, immediate?: boolean): void;
      clear(): void;
      undo(): void;
    }
  }
  
  