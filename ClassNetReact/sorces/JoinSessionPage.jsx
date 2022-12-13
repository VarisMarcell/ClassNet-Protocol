import { useState } from "react"

const JoinSession = () => {
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
                <button className='joinSession'>Join Session</button>
            </section>
        </div>
    )
}

export default JoinSession