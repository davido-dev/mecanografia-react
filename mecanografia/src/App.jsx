import { useState } from 'react'
import Display from "./components/display/display"
import Contador from "./components/contador/contador"
import Input from "./components/input/input"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='a'>
      <h1>Mecanografía</h1>
      <Contador />
      <Display />
      <Input />
    </div>
    </>
  )
}

export default App
