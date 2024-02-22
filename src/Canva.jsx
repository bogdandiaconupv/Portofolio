import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/web';
import { TextureLoader } from 'three';

const Canva = () => {
    const [color] = useLoader(TextureLoader, '/assets/earth.gif');

    return (
        <Canvas>
            <ambientLight intensity={2} />
            <mesh> 
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} />
            </mesh>
        </Canvas>
    );
};

export default Canva;
