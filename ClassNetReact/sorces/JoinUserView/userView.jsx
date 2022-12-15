import * as React from 'react';
import { useState } from "react"
import { Button, TextField } from '@mui/material'
import { useParams } from "react-router-dom"
import PackageMessages from "../../src/assets/components/messageBody/packageMessage"
import EnterMessage from "../../src/assets/components/messageBody/enterMessage"
import SplitMessage from "../../src/assets/components/messageBody/splitMessage"
import VerticalLinearStepper from "../../src/assets/components/steper"

const UserView = () => {
    const [viewable, setViewable] = useState({
        begining: true,
        enterMessage: false,
        split: false,
        package: false,
    })
    const [activeStep, setActiveStep] = React.useState(0);

    const { session, name, seat } = useParams()
    const [message, setMessage] = useState({
        message: ""
    })

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
                    <h1>Steps</h1>
                </section>
            </nav>
            <section className="userBody">
                <div className="userContentBody">
                    <section className="userMessageBody">
                        {
                            viewable.begining ? <div></div>
                                : viewable.enterMessage ?
                                    <EnterMessage funcNam={handleMessageChange} stateNam={message} />
                                    : viewable.split ?
                                        <>
                                            <EnterMessage funcNam={handleMessageChange} stateNam={message} />
                                            <SplitMessage />
                                        </>
                                        :
                                            <>
                                                <EnterMessage funcNam={handleMessageChange} stateNam={message} />
                                                <SplitMessage />
                                                <PackageMessages />
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