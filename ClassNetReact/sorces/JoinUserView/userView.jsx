import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { TextField } from "@mui/material"
import PackageMessages from "../../src/assets/components/messageBody/packageMessage"
import SplitMessage from "../../src/assets/components/messageBody/splitMessage"
import VerticalLinearStepper from "../../src/assets/components/steper"


const defaultPacketHeader = {
    "SSec": " ",
    "SRow": " ",
    "SSeat": " ",
    "DSec": " ",
    "DRow": " ",
    "DSeat": " ",
    "Sequ#": " ",
    "SequTotal": " ",
}

const defaultPacketBody = {
    "0": " ",
    "1": " ",
    "2": " ",
    "3": " ",
    "4": " ",
    "5": " ",
    "6": " ",
    "7": " ",
    "8": " ",
    "9": " ",
    "A": " ",
    "B": " ",
    "C": " ",
    "D": " ",
    "E": " ",
    "F": " ",
}

const defaultLine = {
    "0": " ",
    "1": " ",
    "2": " ",
    "3": " ",
    "4": " ",
    "5": " ",
    "6": " ",
    "7": " ",
    "8": " ",
    "9": " ",
    "A": " ",
    "B": " ",
    "C": " ",
    "D": " ",
    "E": " ",
    "F": " ",
}

const UserView = () => {
    const [viewable, setViewable] = useState({})
    const [activeStep, setActiveStep] = useState(0)
    const [lineData, setLineData] = useState([])
    const [packetDataHeader, setPacketDataHeader] = useState([])
    const [packetDataBody, setPacketDataBody] = useState([])
    const { session, name, seat } = useParams()
    const [message, setMessage] = useState({
        message: ""
    })

    useEffect(() => {
        console.log("call")
        setLineData(_ => {
            const newLines = []
            for (let i = 0; i < Math.ceil(message.message.length / 16); i++) {
                newLines.push({ ...defaultLine })
            }
            return newLines
        })
        setPacketDataHeader(_ => {
            const newPacketHeader = []
            for (let i = 0; i < Math.ceil(message.message.length / 16); i++) {
                newPacketHeader.push({ ...defaultLine })
            }
            return newPacketHeader
        })
        setPacketDataBody(_ => {
            const newPacketBody = []
            for (let i = 0; i < Math.ceil(message.message.length / 16); i++) {
                newPacketBody.push({ ...defaultLine })
            }
            return newPacketBody
        })
        // setLines(Math.ceil(message.message.length / 16))
    }, [message.message])

    useEffect(() => {
        activeStep == 0 ? setViewable({
            begining: true,
            enterMessage: false,
            split: false,
            package: false,
        }) : activeStep == 1 ? setViewable({
            begining: false,
            enterMessage: true,
            split: false,
            package: false,
        }) : activeStep == 2 ? setViewable({
            begining: false,
            enterMessage: false,
            split: true,
            package: false,
        }) : setViewable({
            begining: false,
            enterMessage: false,
            split: false,
            package: true,
        })
    }, [activeStep])


    const handleMessageChange = (event) => {
        const { value } = event.target
        setMessage(prevMessage => {
            return {
                ...prevMessage,
                message: value
            }
        })
    }



    return (
        <div className="userView">
            <nav className="userViewNav">
                <section className="detailDisplay">
                    <section>
                        <div className="userInfo">
                            <h1>User: {name}</h1>
                        </div>
                        <div className="userInfo">
                            <h1>Seat#: {seat}</h1>
                        </div>
                    </section>
                    <div className="userInfo">
                        <h1>Session #: {session}</h1>
                    </div>
                </section>
                <section className="notifications">
                    <h1>ClassNet Protocals</h1>
                </section>
            </nav>
            <section className="userBody">
                <div className="userContentBody">
                    <section className="userMessageBody">
                        {
                            viewable.begining ?
                                <div>
                                    <h1 className='mainTitle'>Welcome Too</h1>
                                    <h1 className='mainTitle'>ClassNet Protocols</h1>
                                </div>
                                : viewable.enterMessage ?
                                    <section className="enterMessage">
                                        <h1>Message:</h1>
                                        <TextField onChange={handleMessageChange} value={message.message} id="filled-basic, fullWidth" label="Enter Message Here" variant="filled" />
                                    </section>
                                    : viewable.split ?
                                        <>
                                            <SplitMessage lineData={lineData} setLineData={setLineData} />
                                            <section className="enterMessage" style={{ opacity: 0.65 }}>
                                                <h1>Message:</h1>
                                                <TextField disabled onChange={handleMessageChange} value={message.message} id="filled-basic, fullWidth" label="Enter Message Here" variant="filled" />
                                            </section>
                                        </>
                                        : viewable.package ?
                                            <>
                                                <PackageMessages packetDataHeader={packetDataHeader} setPacketDataHeader={setPacketDataHeader} packetDataBody={packetDataBody} setPacketDataBody={setPacketDataBody} />
                                                <SplitMessage lineData={lineData} setLineData={setLineData} />
                                                <section className="enterMessage" style={{ opacity: 0.65 }}>
                                                    <h1>Message:</h1>
                                                    <TextField disabled onChange={handleMessageChange} value={message.message} id="filled-basic, fullWidth" label="Enter Message Here" variant="filled" />
                                                </section>
                                            </>
                                            : <></>

                        }
                    </section>
                </div>
                <div className="notificationBody">
                    <VerticalLinearStepper setActiveStep={setActiveStep} activeStep={activeStep} />
                </div>
            </section>
        </div>
    )
}

export default UserView