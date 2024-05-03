import useGame from "../hooks/useGame"


const Menu = () => {
    const [saveWorld, resetWorld] = useGame((state) => [state.saveWorld,state.resetWorld])
  return (
    <div className="absolute top-8 left-3">
     <div className="flex gap-3">
        <button className="bg-blue-600 rounded-xl p-3 text-white text-1xl font-semibold" onClick={() => saveWorld()}>Save</button>
        <button className="bg-red-600 rounded-xl p-3 text-white text-1xl font-semibold" onClick={() => resetWorld()}>Reset</button>
      </div>
    </div>
  )
}

export default Menu