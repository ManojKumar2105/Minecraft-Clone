import { useBox } from "@react-three/cannon"
import * as textures from '../assets/images/textures.js'
import useGame from "../hooks/useGame.js"
import {useState} from "react"

const Cube = ({cubeData, key}) => {
    const [ref] = useBox(() => ({
        position:cubeData.pos,
        type:"static"
    }))
    const [isHovered, setIsHovered] = useState(false)
    const [addCubes, removeCubes, texture] = useGame((state) => [state.addCubes, state.removeCubes, state.texture])
    const activeTexture = textures[cubeData.texture+`Texture`]
    return <mesh ref={ref}
                 onClick={(e) => {
                    e.stopPropagation();
                    const {x,y,z} = ref.current.position
                    const clickedFace = Math.floor(e.faceIndex / 2)
                    if(e.altKey){
                      removeCubes(cubeData.key)
                    }
                    else if (clickedFace == 0) addCubes(x + 1, y , z)
                    else if (clickedFace == 1) addCubes(x - 1, y , z)
                    else if (clickedFace == 2) addCubes(x, y + 1 , z)
                    else if (clickedFace == 3) addCubes(x, y - 1 , z)
                    else if (clickedFace == 4) addCubes(x, y , z+1)
                    else if (clickedFace == 5) addCubes(x , y , z-1)
                }}
                onPointerMove={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
    //   onDoubleClick={() => {const {x,y,z} = ref.current.position;
    //   removeCubes(x,y,z)}}
      >
      <boxGeometry />
      <meshStandardMaterial color={isHovered ? "grey" : "white"} transparent={true}  opacity={cubeData.texture == "glass" ? 0.5 : 1 } map={activeTexture} />
    </mesh>
}

export default Cube