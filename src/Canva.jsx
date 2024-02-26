import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import HelmetGold from './HelmetGold';
import { OrbitControls, ScrollControls } from '@react-three/drei';

const Canva = ({ rank }) => {
  const [lightPosition, setLightPosition] = useState([0, -3, 10]);
  const canvasContainerRef = useRef(null); // Ref for the canvas container
  const [enabler, setEnabler] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      //LIGHT MOVEMENT
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      // update light
      setLightPosition([x * 10, y * 10, 4]);
    };

    const canvasContainer = canvasContainerRef.current;

    if (canvasContainer) {
      // Add event listener for mousemove on canvas container
      canvasContainer.addEventListener('mousemove', handleMouseMove);

      // Cleanup: remove event listener when component unmounts
      return () => {
        canvasContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }

  }, []);

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current;

    const handleScroll = (event) => {
      const rect = canvasContainer.getBoundingClientRect();
      setEnabler(rect.top === 0);
      event.preventDefault();
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollEnd = (event) => {
      const target = event.target;
      const bottom = target.scrollHeight - target.clientHeight;
      if (target.scrollTop === bottom) {
        // disable further scrolling
        target.style.overflowY = 'hidden';
      }
    };

    const canvasContainer = canvasContainerRef.current;

    if (canvasContainer) {
      // add the scroll event listener to the canvas container
      canvasContainer.addEventListener('scroll', handleScrollEnd);

    }
  }, []);


  return (
    <div ref={canvasContainerRef} className='w-full h-full hideScroll'>
      <Canvas className='bg-blue-300'>
        <pointLight position={lightPosition} intensity={500} />
        <OrbitControls enableZoom={false} />
        <ScrollControls
          pages={1}
          damping={1}
          enabled={enabler}
          distance={1}
          
        >
          <HelmetGold rank={rank} />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Canva;
