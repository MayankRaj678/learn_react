import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("grey");

  return (
<div  className="w-screen h-screen duration-200"
 style={{ backgroundColor: color }}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap gap-3 px-4 py-4 bg-gray-100 justify-center"
style={{ backgroundColor: "#FFE5B4" }}>
  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
   onClick={()=> setColor("blue")}>Blue</button>
  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
  onClick={()=> setColor("green")}>Green</button>
  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  onClick={()=> setColor("red")}>Red</button>
  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
  onClick={()=> setColor("yellow")}>Yellow</button>
  </div>
</div>
</div>


  )
}

export default App
