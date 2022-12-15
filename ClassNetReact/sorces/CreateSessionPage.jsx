import { useState } from "react"

const CreateSession = ({ sessionKey, adminKey }) => {
  const [seats, setSeats] = useState({
      'A1' : '',
      'A2' : '',
      'A3' : '',
      'A4' : '',
      'A5' : '',
      'A6' : '',
      'A7' : '',
      'A8' : '',
      'A9' : '',
      'A10' : '',
      'A11' : '',
      'A12' : '',
      'A13' : '',
      'A14' : '',
      'A15' : '',
      'A16' : '',
      'A17' : '',
      'A18' : '',
      'A19' : '',
      'A20' : '',
      
      'B1': '',
      'B2': '',
      'B3': '',
      'B4': '',
      'B5': '',
      'B6': '',
      'B7': '',
      'B8': '',
      'B9': '',
      'B10': '',
      'B11': '',
      'B12': '',
      'B13': '',
      'B14': '',
      'B15': '',
      'B16': '',
      'B17': '',
      'B18': '',
      'B19': '',
      'B20': '',

      'C1': '',
      'C2': '',
      'C3': '',
      'C4': '',
      'C5': '',
      'C6': '',
      'C7': '',
      'C8': '',
      'C9': '',
      'C10': '',
      'C11': '',
      'C12': '',
      'C13': '',
      'C14': '',
      'C15': '',
      'C16': '',
      'C17': '',
      'C18': '',
      'C19': '',
      'C20': '',

      'D1': '',
      'D2': '',
      'D3': '',
      'D4': '',
      'D5': '',
      'D6': '',
      'D7': '',
      'D8': '',
      'D9': '',
      'D10': '',
      'D11': '',
      'D12': '',
      'D13': '',
      'D14': '',
      'D15': '',
      'D16': '',
      'D17': '',
      'D18': '',
      'D19': '',
      'D20': '',

      'E1': '',
      'E2': '',
      'E3': '',
      'E4': '',
      'E5': '',
      'E6': '',
      'E7': '',
      'E8': '',
      'E9': '',
      'E10': '',
      'E11': '',
      'E12': '',
      'E13': '',
      'E14': '',
      'E15': '',
      'E16': '',
  })


  function getSessionData() {
    fetch(`127.0.0.1:5000/joinData?${sessionKey}`, {
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

  return (
    <div className="admin">
      <div className="adminDisplay">
        <h1 className='mainTitle'>ClassNet Protocols</h1>
        <h1 className='mainTitle'>Session Key: 923847g</h1>
      </div>
      <section className="allUsers">
        <section className="">
          {Object.keys(seats).map(seat => {
            return <div Key={seat}>{seat}</div>
          })}
        </section>
      </section>
    </div>
  )
}

export default CreateSession