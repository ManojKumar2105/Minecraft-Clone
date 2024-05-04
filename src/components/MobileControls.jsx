import React from 'react'
import useGame from "../hooks/useGame"

const MobileControls = () => {
const [setTexture, setActions] = useGame((state) => [state.setTexture, state.setActions])

  return (
    <div>
      <div className="absolute top-8 right-4">
          <select className="bg-gray-600 lg:hidden xl:hidden 2xl:hidden rounded-xl p-3 text-white text-1xl font-semibold" onChange={(e) => setTexture(e.target.value)}>
              <option value="dirt">Dirt</option>
              <option value="wood">Wood</option>
              <option value="glass">Glass</option>
              <option value="log">Log</option>
              <option value="grass">Grass</option>
          </select>
      </div>
      <div className ="absolute bottom-8 left-4">
          <div className='flex flex-col gap-3 justify-center flex-1 items-center'>
              <div className='inline-block grow bg-gray-400 p-6 lg:hidden xl:hidden 2xl:hidden text-4xl rounded-full w-fit'
               onTouchStart={() => {
                const boolValue = true
                setActions("moveForward",boolValue)
              }}
               onTouchEnd={() => {
                const boolValue = false
                setActions("moveForward",boolValue)
              }}
              
              >↑</div>
                <div className='flex flex-row gap-3 flex-1'>
                  <div className='bg-gray-400 p-6 lg:hidden xl:hidden 2xl:hidden text-4xl rounded-full'
                  onTouchStart={() => {
                const boolValue = true
                setActions("moveLeftward",boolValue)
              }}
               onTouchEnd={() => {
                const boolValue = false
                setActions("moveLeftward",boolValue)
              }}
                  >←</div>
                  <div className='bg-gray-400 grow p-6 lg:hidden xl:hidden 2xl:hidden text-4xl rounded-full'
                    onTouchStart={() => {
                const boolValue = true
                setActions("moveBackward",boolValue)
              }}
               onTouchEnd={() => {
                const boolValue = false
                setActions("moveBackward",boolValue)
              }}
                  >↓</div>
                  <div className='bg-gray-400 p-6 lg:hidden xl:hidden 2xl:hidden text-4xl rounded-full'
                    onTouchStart={() => {
                const boolValue = true
                setActions("moveRightward",boolValue)
              }}
               onTouchEnd={() => {
                const boolValue = false
                setActions("moveRightward",boolValue)
              }}
                  >→</div>
                </div>
          </div>
      </div>
      
      <div className='absolute right-4 bottom-8'>
            <div className='bg-gray-400 p-12 lg:hidden xl:hidden 2xl:hidden rounded-full'
                onTouchStart={(e) => {
                const boolValue = true
                setActions("jump",boolValue)
              }}
               onTouchEnd={() => {
                const boolValue = false
                setActions("jump",boolValue)
              }}
            >JUMP</div>
          </div>
  </div>
  )
}

export default MobileControls