import { Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Audifonos from './Audifonos'

const Scene = () => {
  return (
    <>
        <Canvas camera={{ fov: 65, position: [0, 0, 8.3] }}>
        <ScrollControls pages={12} damping={0.25}>
          <Audifonos />
        </ScrollControls>
        <Environment files={"./models/abandoned_tiled_room_1k.hdr"} />
      </Canvas>
    </>
  )
}

export default Scene