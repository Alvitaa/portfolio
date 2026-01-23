import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Hola! Mi nombre es</h3>
      <h1>Juan Alva</h1>
      <p>Soy un desarrollador Frontend con experiencia en el desarrollo de aplicaciones Fullstack</p>
      <p>Construyendo interfaces que conectan usuarios con sistemas</p>
    </>
  )
}

export default App
