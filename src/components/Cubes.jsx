import useGame from "../hooks/useGame"
import Cube from "./Cube.jsx";

const Cubes = () => {
  const [cubes] = useGame((state) => [state.cubes])
  return cubes.map((cube, idx) => <Cube key={cube.key} cubeData = {cube}/>)
  
}

export default Cubes