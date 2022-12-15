import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [data, setData] = useState("")
  const navigate = useNavigate()

  function startSession() {
    fetch('http://127.0.0.1:5000/createSession', {
      'methods': "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      }
    })
      .then(response => response.json())
      .then(response => setData(response))
      .catch(error => console.log(error))
  }

  const getData = async () => {
    const rawData = await fetch('http://127.0.0.1:5000/createSession')
    const jsonData = await rawData.json()
    setData(jsonData)
    console.log(jsonData)
  }

  return (
    <div className="App">
      <h1 className='mainTitle'>ClassNet Protocols</h1>
      <section className='mainButtons'>
        <button
          className='createSession'
          onClick={() => {
            startSession()
            // navigate(`/CreateSession/${sessionKey}`)
          }}

        >Create Session</button>
        <button
          className='joinSession'
          onClick={() => {
            getData()
            // navigate('/JoinSession')
          }}
        >Join Session</button>
      </section>
    </div>
  )
}

export default App
