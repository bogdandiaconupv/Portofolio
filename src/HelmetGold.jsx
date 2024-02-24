import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, useScroll } from '@react-three/drei';
import gsap from 'gsap';


export const FLOOR_HEIGHT = 2;
export const NB_FLOORS = 1;


const HelmetGold = ({props , rank}) => {
  const group = useRef(); // Ref for the group containing the helmet mesh
  const ref = useRef();
  const tl = useRef();
  const goldHelmet = useRef();
 

  const { nodes, materials } = useGLTF('models/SampleScene.glb');

  // useFrame hook to update rotation on each frame
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });



  
  const scroll = useScroll();
  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    //vertical animation 
     tl.current.to(
      ref.current.position,{
        duration:1,
        x : 2,
      },
      0
     );


     tl.current.from(
      goldHelmet.current.position,
      {
        duration:0.1,
        x:0,

      },
      0.5
     );
  }, [])

  function returnGold() {
    return (
      <>
        <group ref={ref}>
          <group ref={goldHelmet}>
            <mesh geometry={nodes.CorinthianHelmet_LOD0.geometry} material={materials.Bronze} scale={10} />
          </group>
          <PerspectiveCamera makeDefault={false} far={1000.134} near={0.3} fov={60} position={[0, 1, -10]} rotation={[-Math.PI, 0, -Math.PI]} />
          <directionalLight intensity={1.53} decay={2} color="#fffaec" position={[0, 3, 0]} rotation={[-2.199, -0.327, -2.725]} />
        </group>
      </>
    );
  }
  function returnSilver(){
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 0, 0]}>
          {/* <mesh geometry={nodes.CorinthianHelmet_LOD0.geometry} material={materials.Bronze} scale={10} /> */}
          <mesh geometry={nodes.CorinthianHelmet_LOD1.geometry} material={materials.Corinthian} scale={10} />
          {/* <mesh geometry={nodes.CorinthianHelmet_LOD2.geometry} material={materials.Corinthian} scale={10} /> */}
        </group>
        <PerspectiveCamera makeDefault={false} far={1000.134} near={0.3} fov={60} position={[0, 1, -10]} rotation={[-Math.PI, 0, -Math.PI]} />
        <directionalLight intensity={3.142} decay={2} color="#ed05d2" position={[0, 3, 0]} rotation={[-2.199, -0.327, -2.725]} />
      </group>
    );
  }
  function returnBronze(){
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 0, 0]}>
          {/* <mesh geometry={nodes.CorinthianHelmet_LOD0.geometry} material={materials.Bronze} scale={10} /> */}
          {/* <mesh geometry={nodes.CorinthianHelmet_LOD1.geometry} material={materials.Corinthian} scale={10} /> */}
          <mesh geometry={nodes.CorinthianHelmet_LOD2.geometry} material={materials.Corinthian} scale={10} />
        </group>
        <PerspectiveCamera makeDefault={false} far={1000.134} near={0.3} fov={60} position={[0, 1, -10]} rotation={[-Math.PI, 0, -Math.PI]} />
        <directionalLight intensity={1.142} decay={2} color="#22ff00" position={[0, 3, 0]} rotation={[-2.199, -0.327, -2.725]} />
      </group>
    );
  }

  let helmetComponent;
  switch (rank) {
    case 'gold':
      helmetComponent = returnGold();
      break;
    case 'silver':
      helmetComponent = returnSilver();
      break;
    case 'bronze':
      helmetComponent = returnBronze();
      break;
    default:
      helmetComponent = null;
  }

  return helmetComponent;
};

useGLTF.preload('models/SampleScene.glb');
export default HelmetGold;
