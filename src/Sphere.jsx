import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import earth from './assets/earth3.jpg';
import cloud from './assets/clouds.jpg';

const Sphere = () => {
    const color = new THREE.TextureLoader().load(earth);
    const clouds = new THREE.TextureLoader().load(cloud);
    const sphereRef = useRef();
    const [scrollFactor, setScrollFactor] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const pageHeight = document.body.scrollHeight - window.innerHeight;
            const normalizedScroll = Math.min(Math.max(scrollPosition / pageHeight, 0), 1);
            setScrollFactor(normalizedScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useFrame(() => {
        // Update scale of the sphere based on the scroll factor
        sphereRef.current.scale.setScalar(1 + scrollFactor);
    });

    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight intensity={3.5} position={[1, 0, 0.25]} />
            <mesh scale={[1, 1, 1]} ref={sphereRef}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} aoMap={clouds} />
            </mesh>
        </>
    );
};

export default Sphere;
