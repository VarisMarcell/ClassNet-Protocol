import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { TextField } from "@mui/material"
import PackageMessages from "../../src/assets/components/messageBody/packageMessage"
import SplitMessage from "../../src/assets/components/messageBody/splitMessage"
import VerticalLinearStepper from "../../src/assets/components/steper"

const UserView = () => {
    const [viewable, setViewable] = useState({})
    const [activeStep, setActiveStep] = useState(0)
    const [lines, setLines] = useState(1)
    const { session, name, seat } = useParams()
    const [message, setMessage] = useState({
        message: ""
    })

    useEffect(() => {
        setLines(Math.ceil(message.message.length / 16))
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
                            viewable.begining ? <div></div>
                                : viewable.enterMessage ?
                                    <section className="enterMessage">
                                        <h1>Message:</h1>
                                        <TextField onChange={handleMessageChange} value={message.message} id="filled-basic, fullWidth" label="Enter Message Here" variant="filled" />
                                    </section>
                                    : viewable.split ?
                                        <>
                                            <SplitMessage lines={lines}/>
                                            <section className="enterMessage" style={{ opacity: 0.65 }}>
                                                <h1>Message:</h1>
                                                <TextField disabled onChange={handleMessageChange} value={message.message} id="filled-basic, fullWidth" label="Enter Message Here" variant="filled" />
                                            </section>
                                        </>
                                        :
                                        <>
                                            <PackageMessages />
                                            <SplitMessage lines={lines}/>
                                            <section className="enterMessage" style={{ opacity: 0.65 }}>
                                                <h1>Message:</h1>
                                                <TextField disabled onChange={handleMessageChange} value={message.message} id="filled-basic, fullWidth" label="Enter Message Here" variant="filled" />
                                            </section>
                                        </>

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