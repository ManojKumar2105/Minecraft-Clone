import { useCallback, useEffect, useState } from 'react'

const useKeyboard = () => {
    function actionByKey(key) {
    const keyActionMap =  {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeftward",
        KeyD: "moveRightward",
        ArrowUp: "moveForward",
        ArrowDown: "moveBackward",
        ArrowLeft: "moveLeftward",
        ArrowRight: "moveRightward",
        Space:"jump",
        Digit1:"texture1",
        Digit2:"texture2",
        Digit3:"texture3",
        Digit4:"texture4",
        Digit5:"texture5",
    }
    
    return keyActionMap[key];
}
    const [actions, setActions] = useState({
        moveForward:false,
        moveBackward:false,
        moveLeftward:false,
        moveRightward:false,
        jump:false,
        texture1:false,
        texture2:false,
        texture3:false,
        texture4:false,
        texture5:false
    })

    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) =>{
            return({
                ...prev,
                [action]:action == "jump" ? !e.repeat : true
            })}
        )
        }
    },[])
    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) =>{
            return({
                ...prev,
                [action]:false
            })}
        )
        }
    },[])

    useEffect(() => {
        document.addEventListener("keydown",handleKeyDown);
        document.addEventListener("keyup",handleKeyUp);
        return () =>{
            document.removeEventListener("keydown",handleKeyDown)
            document.removeEventListener("keyup",handleKeyUp)
        }
    },[handleKeyDown, handleKeyUp])

  return actions
}

export default useKeyboard