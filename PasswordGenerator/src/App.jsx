import { useCallback, useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [number,setNumber]=useState(false)
  const [characters,setCharacters]=useState(false)
  const [password,setPassword]=useState("")
//useRef
const passwordRef=useRef(null);
const copypass=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])
  const PaswordGenerator =useCallback(()=>{
let ste="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(number) ste+="0123456789";
if(characters) ste+="~!@#$%^&*()_-+=:;<>,./";
let pass="";
for(let i=0;i<length;i++){
let ind=Math.floor(Math.random()*ste.length+1);
pass+= ste.charAt(ind)
}
setPassword(pass)
  },[length,characters,number,setPassword])
  useEffect(()=>{
    PaswordGenerator()
  },[characters,PaswordGenerator,length,number])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 my-8 text-white bg-pink-300'
     >
      <h1 className='text-blue text-center my-3 mb-2 font-bold'
       style={{color: 'green'}}>
        Password Generator
      </h1>
      <div className='flex gap-1 rounded-lg 
      overflow-hidden mb-2 '>
        <input
      type="text"
      value={password}
      className='outline-none w-full h-10 px-3 mb-2 rounded-lg'
      placeholder='password'
      ref={passwordRef}
      readOnly
      />
      <button className='outline-none bg-blue-500 
      px-3 h-10 shrink-0'
      onClick={copypass}>
        Copy
      </button>
      </div>

 
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>setLength(e.target.value) }
    />
    <label>Length: {length}</label>

  </div>
  <div className='flex item-center gap-x-1'>
    <input
    type="checkbox"
    defaultChecked={characters} 
    id='characterinput'
    onChange={()=> {
      setCharacters((prev)=>!prev)
    }}
   />
    <label htmlFor="Characterinput"> character</label>
    </div>
    <div className='flex item-center gap-x-1'>
    <input
    type="checkbox"
    defaultChecked={number} 
    id='numberinput'
    onChange={()=> {
      setNumber((prev)=>!prev)
    }}
   />
    <label htmlFor="numberinput"> number</label>
    </div>
  </div>
</div>
    </>
  )
}

export default App
