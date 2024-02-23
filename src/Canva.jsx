import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import HelmetGold from './HelmetGold'; 

const Canva = ({ rank }) => {
  const [lightPosition, setLightPosition] = useState([0, -3, 10]); 
  const canvasRef = useRef(null); // Ref for the canvas element

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // update light
      setLightPosition([x * 10, y * 10, 4]); 
    };

    const canvas = canvasRef.current;

    if (canvas) {
      // Add event listener for mousemove on canvas
      canvas.addEventListener('mousemove', handleMouseMove);

      // Cleanup: remove event listener when component unmounts
      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [canvasRef]); 

  return (
    <Canvas ref={canvasRef} >
      <pointLight position={lightPosition} intensity={300} />
      <HelmetGold rank={rank} />
    </Canvas>
  );
};

export default Canva;
