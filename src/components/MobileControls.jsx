import React from 'react'
import useGame from "../hooks/useGame"

const MobileControls = () => {
const [setTexture] = useGame((state) => [state.setTexture])
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
  </div>
  )
}

export default MobileControls