import { useState } from 'react'
import './App.css'
import {Button} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>ClassNet Protocols</h1>
      <Button variant="contained">Make Session</Button>
      <Button variant="contained">Join Session</Button>
    </div>
  )
}

export default App
