import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [colour, setColour] = useState(() => {
    return localStorage.getItem('colour') || 'pink';
  });

  useEffect(()=>{
    localStorage.setItem('colour', colour);
  },[colour]);

  return (
    <>
      <div style={{ backgroundColor: colour }} className='h-screen w-screen transition duration-200'>
        <h1 className='text-3xl font-bold pt-5 text-center'>Colour Toggler</h1>
        <div className='bg-amber-500 fixed bottom-10 h-15 inset-x-7 flex justify-around rounded-2xl items-center'>
          <button className='bg-red-600 w-30 h-9 rounded-full text-white hover:opacity-80' onClick={() =>
            setColour('red')
          }>Red</button>
          <button className='bg-blue-700 w-30 h-9 rounded-full text-white hover:opacity-80' onClick={() =>
            setColour('blue')
          }>Blue</button>
          <button className='bg-gray-600 w-30 h-9 rounded-full text-white hover:opacity-80' onClick={() =>
            setColour('gray')
          }>Gray</button>
          <button className='bg-purple-800 w-30 h-9 rounded-full text-white hover:opacity-80' onClick={() =>
            setColour('purple')
          }>Purple</button>
          <button className='bg-orange-600 w-30 h-9 rounded-full text-white hover:opacity-80' onClick={() =>
            setColour('orange')
          }>Orange</button>
          <button className='bg-green-800 w-30 h-9 rounded-full text-white hover:opacity-80' onClick={() =>
            setColour('green')
          }>Green</button>
        </div>
      </div>
    </>
  )
}

export default App