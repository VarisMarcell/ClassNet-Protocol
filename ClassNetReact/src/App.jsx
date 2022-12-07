import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState({name:""})

  function getData() {
    fetch('http://127.0.0.1:5000', {
      'methods':"GET",
      headers : {
        'Content-Type':"applicaiton/json"
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
      <h1>{data.name}</h1>
    </div>
  )
}

export default App
