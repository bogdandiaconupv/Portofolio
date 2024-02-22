import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/web';
import * as THREE from 'three'; // Import THREE from three package
import earth from './assets/earth3.jpg';
import cloud from './assets/clouds.jpg'

const Canva = () => {
    const color = new THREE.TextureLoader().load(earth)
    const clouds = new THREE.TextureLoader().load(cloud)

    return (
        <Canvas>
    <ambientLight intensity={0.6} />
    <directionalLight intensity={3.5} position={[1 , 0, .25]} />
    <mesh scale={1.6} > 
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} aoMap={clouds}/>
    </mesh>
</Canvas>
    );
};

export default Canva;
