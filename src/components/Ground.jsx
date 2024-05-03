import { usePlane } from '@react-three/cannon'
import React from 'react'
import { grassTexture } from '../assets/images/textures'
import useGame from '../hooks/useGame'

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation:[-Math.PI / 2, 0, 0],
    position:[0, -0.5, 0]
  }))
  const [addCubes] = useGame((state) => [state.addCubes])

  const handleAdditionCubes = (e) => {
      e.stopPropagation();
      const [x, y , z] = Object.values(e.point).map((val) => Math.ceil(val))
      addCubes(x, y, z)
  }

  return (
        <mesh onClick={handleAdditionCubes} ref={ref}>
          <planeGeometry args={[100,100]} />
          <meshStandardMaterial map={grassTexture} />
        </mesh>
  )
}

export default Ground