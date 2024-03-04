import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { PointLight } from 'three';
import HelmetGold from './HelmetGold';
import Statue from './Statue';

const Canva = ({ rank }) => {
  const canvasContainerRef = useRef(null); // Ref for the canvas container
  const lightRef = useRef(null); // Ref for the pointer light component
  const [lightPosition, setLightPosition] = useState([0, 0, 0]); // Initial light position
  const [enabler, setEnabler] = useState(true); // Scroll enable/disable state

  useEffect(() => {
    // Gradually transition light position towards the mouse position
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setLightPosition([x * 10, y * 10, 6]);
    };

    const canvasContainer = canvasContainerRef.current;

    if (canvasContainer) {
      canvasContainer.addEventListener('mousemove', handleMouseMove);

      // Cleanup: remove event listener when component unmounts
      return () => {
        canvasContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    // Setup initial light animation
    const initialLightPosition = [0, -3, 10]; // Initial light position
    const lightAnimationDuration = 2000; // Duration of animation in milliseconds

    if (lightRef.current) {
      const initialLight = new PointLight(); // Create a temporary light
      initialLight.position.set(...initialLightPosition); // Set initial position
      lightRef.current.light = initialLight; // Assign the temporary light to the light component

      // Perform animation
      const startTime = performance.now();
      const animateLight = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / lightAnimationDuration, 1);
        const newPosition = initialLightPosition.map((val, index) =>
          val + (lightPosition[index] - val) * progress
        );
        initialLight.position.set(...newPosition);

        if (progress < 1) {
          requestAnimationFrame(animateLight);
        }
      };

      requestAnimationFrame(animateLight);
    }
  }, []);

  useEffect(() => {
    // Setup scroll event listener
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

  return (
    <div ref={canvasContainerRef} className='w-full h-full hideScroll'>
      <Canvas className=''>
        <pointLight ref={lightRef} position={lightPosition} intensity={1} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={1} damping={1} enabled={enabler} distance={1}>
          <Statue />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Canva;
