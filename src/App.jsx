import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'

function App() {
   const [value,setvalue] =useState(99);

  return (
   <>
    <h1>count (value)</h1>
    <button onClick={
      () => {
        setvalue(value+1);
      }
    }>Add</button>
    </>
   
  )
}

export default App
