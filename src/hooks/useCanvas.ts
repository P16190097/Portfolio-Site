/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, MutableRefObject } from 'react';

const useCanvas = (draw: { (canvasRef: { current: any; }): void; (arg0: MutableRefObject<null>): void; }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    draw(canvasRef);
  }, [draw]);

  return canvasRef;
};

export default useCanvas;