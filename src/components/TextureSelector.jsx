import {useEffect, useState} from 'react'
import useGame from '../hooks/useGame'
import useKeyboard from '../hooks/useKeyboard'
import dirt from "../assets/images/dirt.jpg"
import glass from "../assets/images/glass.png"
import log from "../assets/images/log.jpg"
import wood from "../assets/images/wood.png"
import grass from "../assets/images/grass.jpg"

const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useGame((state) => [state.texture, state.setTexture])
    const TextureMapping = {1:"dirt", 2:"wood", 3:"grass", 4:"glass", 5:"log"}
    const {texture1,texture2,texture3,texture4,texture5} = useKeyboard();
    const images=[dirt,wood,grass,glass,log]
    useEffect(() => {
      if(texture1) setTexture("dirt")
      else if (texture2) setTexture("wood")
      else if (texture3) setTexture("grass")
      else if (texture4) setTexture("glass")
      else if (texture5) setTexture("log")

    },[texture1,texture2,texture3,texture4,texture5])

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {setVisible(false)},1600)
        setVisible(true);
        return () => clearTimeout(visibilityTimeout)
    },[activeTexture])
  return visible && (
    
    <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-bold flex gap-0.1 text-black text-3xl scale-[5]'>
      {images.map((k, idx) => 
      {
       return <img key={k} src={k} className={`${activeTexture == TextureMapping[idx+1] ? "border-2 border-blue-400" : ""} `}  />
      }
      
      )}

    </div>
    
  )
}

export default TextureSelector