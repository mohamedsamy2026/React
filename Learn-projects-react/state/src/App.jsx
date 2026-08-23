import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Scoreboard from './usestate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scoreboard/>
    </>
  )
}

export default App
