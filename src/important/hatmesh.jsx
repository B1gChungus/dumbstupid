// when getting a mesh, the parent file starts at the public folder
// doing "./cube" would be public/cube
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Getmesh(props) {
    const { nodes, materials } = useGLTF("./hat.glb") // this HAS to be in front to use any events
    const ref = useRef()
    useFrame((state) => (ref.current.rotation.y += 0.01))
    return (
        <group {...props} dispose={null} ref={ref} rotation={[-3, 0, 0]} scale={[1, 1, 1]} position={[0, -3.5, 0]}>
            <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
        </group>
    )
}
