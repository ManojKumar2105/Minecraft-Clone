import { useCallback, useEffect } from 'react'
import useGame from './useGame';

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
    const [actions,setActions] = useGame((state) => [state.actions, state.setActions])

    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            const boolValue = action == "jump" ? !e.repeat : true
            setActions(action,boolValue)
            return
        }
    },[])
    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            const boolValue = false
            setActions(action,boolValue)
            return
        
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