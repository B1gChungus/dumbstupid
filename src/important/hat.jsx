import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import Hatmesh from "./hatmesh"
import svg from "./gradient.svg"

export default function Hat(props) {
    return (
        <Canvas className="w-1/2" style={{ backgroundImage: `url(${svg})`, backgroundSize: "cover" }}>
            <ambientLight intensity={5} />
            {/* <pointLight position={[0, -10, 0]} intensity={5} decay={15} /> */}
            <pointLight position={[0, 10, 0]} intensity={5} decay={15} />
            <Suspense fallback={null}>
                <Hatmesh className="" />
            </Suspense>
        </Canvas>
    )
}

useGLTF.preload('/cube.glb')
