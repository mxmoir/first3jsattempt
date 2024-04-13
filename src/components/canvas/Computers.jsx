import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <primitive
        object={computer.scene}
        scale = {0.5}
        position={[0, -3.25, -1.5]}
        rotation = {[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <pointLight position={[20, 3, 5]} decay={0} intensity={2} />     
      <Suspense fallback= {<CanvasLoader />}>
        <OrbitControls PI
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />

      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas