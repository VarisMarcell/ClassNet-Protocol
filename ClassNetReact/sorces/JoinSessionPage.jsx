import { useState } from "react"

const JoinSession = () => {
    const [form, setForm] = useState({
        sessionKey: "",
        userName: "",
        seatPosition: "",
    })

    return (
        <div className="App">
            <h1 className='mainTitle'>ClassNet Protocols</h1>
            <section className='mainButtons'>
                <div className="joinForm">
                    <label for="sessionKey">Session Key:</label>
                    <input name="sessionKey" placeholder="Enter Session Key"></input>
                    <label for="userName">UserName:</label>
                    <input name="userName" placeholder="Enter UserName"></input>
                    <label for="seat">Seat:</label>
                    <input name="seat" placeholder="Enter Seat Position"></input>
                </div>
                <button className='joinSession'>Join Session</button>
            </section>
        </div>
    )
}

export default JoinSession