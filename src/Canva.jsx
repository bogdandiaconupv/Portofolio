import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import HelmetGold from './HelmetGold'; // Import HelmetGold component here

const Canva = ({ rank }) => {
  const [lightPosition, setLightPosition] = useState([0, -3, 10]); // Initial light position

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the light position based on the mouse position
      setLightPosition([x * 10, y * 10, 10]); // Adjust the factors as needed
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <Canvas>
      {/* <ambientLight intensity={0}/> */}
      <pointLight position={lightPosition} intensity={800} />
      <HelmetGold rank={rank} />
    </Canvas>
  );
};

export default Canva;
