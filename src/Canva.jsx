import React from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/web';

import Sphere from './Sphere';

const Canva = () => {
   
    
    return (
        <Canvas>
            <Sphere />
        </Canvas>
    );
};

export default Canva;
