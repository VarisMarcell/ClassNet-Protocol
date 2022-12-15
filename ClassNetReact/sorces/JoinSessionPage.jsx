import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const JoinSession = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        sessionKey: "",
        userName: "",
        seatPosition: "",
    })

    const handleJoinChange = (event) => {
        const { name, value } = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
        console.log(form)
    }

    const join = async () => {
        await fetch(`127.0.0.1:5000/joinSession?sessionKey=${form.sessionKey}&userName=${form.userName}&seatPosition=${form.seatPosition}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    return (
        <div className="App">
            <h1 className='mainTitle'>ClassNet Protocols</h1>
            <section className='mainButtons'>
                <div className="joinForm">
                    <label htmlFor="sessionKey">Session Key:</label>
                    <input onChange={handleJoinChange} value={form.sessionKey} name="sessionKey" placeholder="Enter Session Key"></input>
                    <label htmlFor="userName">UserName:</label>
                    <input onChange={handleJoinChange} value={form.userName} name="userName" placeholder="Enter UserName"></input>
                    <label htmlFor="seat">Seat:</label>
                    <input onChange={handleJoinChange} value={form.seatPosition} name="seatPosition" placeholder="Enter Seat Position"></input>
                </div>
                <button
                    className='joinSession'
                    onClick={() => {
                        navigate(`/JoinSession/userView/${form.sessionKey}/${form.userName}/${form.seatPosition}`)
                    }}
                >Join Session</button>
            </section>
        </div>
    )
}

export default JoinSession