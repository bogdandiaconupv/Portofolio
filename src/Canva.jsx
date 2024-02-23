import React from 'react';
import { Canvas } from '@react-three/fiber';
import HelmetGold from './HelmetGold'; // Import HelmetGold component here
import { SkullMask } from './SkullMask';

const Canva = ({ rank }) => {
    return (
      <Canvas>
        {/* <ambientLight intensity={0}/> */}
        <pointLight position={[0, -3, 10]} intensity={800} />
        <HelmetGold rank={rank} />
        {/* <SkullMask /> */}
      </Canvas>
    );
  };

export default Canva;
