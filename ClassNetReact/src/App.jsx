import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [data, setData] = useState({ name: "" })
  const navigate = useNavigate()

  function getData() {
    fetch('http://127.0.0.1:5000', {
      'methods': "GET",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      }
    })
      .then(response => response.json())
      .then(response => setData(response))
      .catch(error => console.log(error))

    fetch('http://127.0.0.1:5000/Caeden', {
      'methods': "GET",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      }
    })
      .then(response => response.json())
      .then(response => setData(response))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <h1 className='mainTitle'>ClassNet Protocols</h1>
      <section className='mainButtons'>
        <button
          className='createSession'
          onClick={() => {
            navigate('/CreateSession')
          }}

        >Create Session</button>
        <button
          className='joinSession'
          onClick={() => {
            navigate('/JoinSession')
          }}
        >Join Session</button>
      </section>
    </div>
  )
}

export default App
