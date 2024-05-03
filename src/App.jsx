import { Canvas } from '@react-three/fiber'
import Ground from './components/Ground'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Player from './components/Player.jsx'
import FPV from './components/FPV.jsx'
import Cubes from './components/Cubes.jsx'
import TextureSelector from './components/TextureSelector.jsx'
import MobileControls from './components/MobileControls.jsx'
import Menu from './components/Menu.jsx'

const App = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <Canvas shadows={true}>
      <Sky sunPosition={[100,100,20]} />
      <ambientLight intensity={2} />
      <Physics>
        <Ground />
        <Cubes />
        <Player />
      </Physics>
      <FPV />
      </Canvas>
      <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-bold text-white text-3xl'>
      +
      </div>
      <TextureSelector />
      <MobileControls />
      <Menu />

  </div>
  )
}

export default App