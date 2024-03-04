import React, { useEffect, useRef, useState } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import gsap from 'gsap';

export default function Statue() {
  const [obj, setObj] = useState(null);
  const [animationInitialized, setAnimationInitialized] = useState(false);
  const group = useRef();
  const ref = useRef();
  const tl = useRef();
  const statue = useRef();
  const scroll = useScroll();

  useEffect(() => {
    const loader = new OBJLoader();
    loader.load(
      'models/statue.obj',
      (loadedObj) => {
        setObj(loadedObj);
      },
      (progress) => {
        // console.log((progress.loaded / progress.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('Error loading OBJ file:', error);
      }
    );
  }, []); // Ensure useEffect runs when the texture is loaded

  useEffect(() => {
    if (obj && !animationInitialized) {
      tl.current = gsap.timeline();
      //FROM INITIAL PLACEMENT TO WHERE I WANT TO BE
      tl.current.to(
        ref.current.position,{
          duration: 1,
          x: -1.5,
          z: 4.6,
          y: -2,
        },
        0
      );
  
      
      statue.current = ref.current;
  
     
    //FROM INTIAL ROTATION TO HOW I WANT TO ROTATE
      tl.current.to(
        statue.current.rotation,
        {
          duration: 0.5,
          y: Math.PI / 2,
        },
        0 // Start immediately
      );
      setAnimationInitialized(true);
    }
  }, [obj, animationInitialized]);
  

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  if (!obj) {
    return null; // or a loading indicator
  }

  return (
    <group ref={group}>
      <group ref={ref} position={[-0.88, -2.8, 3.6]}>
        <primitive object={obj} scale={[0.013, 0.013, 0.013]} />
      </group>
      <ambientLight intensity={0.1} position={[0, 0, 0]} />
    </group>
  );
  
}
