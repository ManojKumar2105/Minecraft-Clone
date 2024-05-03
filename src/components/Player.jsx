import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";

const Player = () => {
    const {camera} = useThree();
    const actions = useKeyboard();
    const [ref, api] = useSphere(()=> ({
        position:[0, 1 , 0],
        type:"Dynamic",
        mass:1
    }))
    const vel = useRef([0,0,0])
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    },[api.velocity])

    const pos = useRef([0,0,0])
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    },[api.position])

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

        const direction = new Vector3();
        const frontVector = new Vector3(
         0,
         0,
         (actions.moveBackward ? 1 : 0) - (actions.moveForward ? 1 : 0)     
        );
        const sideVector = new Vector3(
        (actions.moveLeftward ? 1 : 0) - (actions.moveRightward ? 1 : 0),
         0,
         0     
        );

        direction.subVectors(frontVector,sideVector).normalize().multiplyScalar(3).applyEuler(camera.rotation) 
        api.velocity.set(direction.x,vel.current[1],direction.z)
        
        if(actions.jump && Math.abs(vel.current[1]) < 0.05){
            api.velocity.set(vel.current[0], 4, vel.current[2] )
        }
    })
  return (
    <mesh ref={ref}></mesh>
  )
}

export default Player