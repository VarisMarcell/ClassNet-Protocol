import { useState } from "react"
import { Button, TextField } from '@mui/material'

const UserView = () => {
    return (
        <div className="userView">
            <nav className="userViewNav">
                <section className="detailDisplay">
                    <section>
                        <div className="userInfo">
                            <h1>Name</h1>
                        </div>
                        <div className="userInfo">
                            <h1>Seat#</h1>
                        </div>
                    </section>
                    <div className="userInfo">
                        <h1>Session #</h1>
                    </div>
                </section>
                <section className="notifications">
                    <h1>Notifications</h1>
                </section>
            </nav>
            <section className="userBody">
                <div className="userContentBody">
                    <section className="navigationButtons">
                        <Button variant="outlined">Previous</Button>
                        <Button variant="outlined">Next</Button>
                    </section>
                    <section className="userMessageBody">
                        <section className="enterMessage">
                            <h1>Message:</h1>
                            <TextField id="filled-basic, fullWidth" label="Enter Message Here" variant="filled" />
                        </section>
                        <section className="splitMessage">
                            <h1>Split Message:</h1>
                            <section className='splitMessageInputs'>
                                <div className="line0, packetLines">
                                    <h1>Line 0:</h1>
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                                </div>
                                <div className="line1, packetLines">
                                    <h1>Line 1:</h1>
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                                </div>
                                <div className="line2, packetLines">
                                    <h1>Line 2:</h1>
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                                </div>
                                <div className="line3, packetLines">
                                    <h1>Line 3:</h1>
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                                    <TextField sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                                </div>
                            </section>
                        </section>
                        <section className="packageMessage">
                            <h1>Packet Messages:</h1>
                            <section className="packet0, packet">
                                <div className="packetHeader">
                                    <h1>Header:</h1>
                                    <section className="packetHeaderSection">
                                        <h1>Source:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                                    </section>
                                    <section className="packetHeaderSection">
                                        <h1>Destination:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                                    </section>
                                    <section className="packetHeaderSection">
                                        <h1>Sequence#:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="#" variant="outlined" />
                                        <p>of</p>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="total" variant="outlined" />
                                    </section>
                                </div>
                                <div className="packetBody">
                                    <h1>Body:</h1>
                                    <div>
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                                    </div>
                                    <div>
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                                    </div>
                                </div>
                            </section>
                            <section className="packet1, packet">
                                <div className="packetHeader">
                                    <h1>Header:</h1>
                                    <section className="packetHeaderSection">
                                        <h1>Source:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                                    </section>
                                    <section className="packetHeaderSection">
                                        <h1>Destination:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                                    </section>
                                    <section className="packetHeaderSection">
                                        <h1>Sequence#:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="#" variant="outlined" />
                                        <p>of</p>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="total" variant="outlined" />
                                    </section>
                                </div>
                                <div className="packetBody">
                                    <h1>Body:</h1>
                                    <div>
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                                    </div>
                                    <div>
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                                    </div>
                                </div>
                            </section>
                            <section className="packet2, packet">
                                <div className="packetHeader">
                                    <h1>Header:</h1>
                                    <section className="packetHeaderSection">
                                        <h1>Source:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                                    </section>
                                    <section className="packetHeaderSection">
                                        <h1>Destination:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                                    </section>
                                    <section className="packetHeaderSection">
                                        <h1>Sequence#:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="#" variant="outlined" />
                                        <p>of</p>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="total" variant="outlined" />
                                    </section>
                                </div>
                                <div className="packetBody">
                                    <h1>Body:</h1>
                                    <div>
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                                    </div>
                                    <div>
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                                    </div>
                                </div>
                            </section>
                            <section className="packet3, packet">
                                <div className="packetHeader">
                                    <h1>Header:</h1>
                                    <section className="packetHeaderSection">
                                        <h1>Source:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                                    </section>
                                    <section className="packetHeaderSection">
                                        <h1>Destination:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                                    </section>
                                    <section className="packetHeaderSection">
                                        <h1>Sequence#:</h1>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="#" variant="outlined" />
                                        <p>of</p>
                                        <TextField sx={{ width: "100px" }} id="outlined-basic" label="total" variant="outlined" />
                                    </section>
                                </div>
                                <div className="packetBody">
                                    <h1>Body:</h1>
                                    <div>
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                                    </div>
                                    <div>
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                                        <TextField sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
                <div className="notificationBody"></div>
            </section>
        </div>
    )
}

export default UserView