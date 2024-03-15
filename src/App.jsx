import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>СЧЕТЧИК</h1>
      <button onClick={() => {setCount(count + 1)} }>+</button>
      <input type="text" value={count} disabled/>
      <button onClick={() => {setCount(count - 1)} }>-</button>
      <button onClick={() => {setCount(count * 0)}}>X</button>
    </>
  )
}

export default App
