import { TextField } from '@mui/material'
import { useState } from 'react'

const Packet = () => {
    const [packets, setPackets] = useState({
        packet0: {
            source: {
                section: "",
                row: "",
                seat: "",
            },
            destination: {
                section: "",
                row: "",
                seat: "",  
            },
            sequence: {
                Num: "",
                total: "",
            },
            body: {
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
        }
    })

    const handleChange = (event) => { 
        const {packet, group, id, value} = event.target
        setPackets(prevPackets => {
            return {
                ...prevPackets,
                [packet]: {
                    ...packet,
                    [group]: {
                        ...group,
                        [id]: value
                    }
                }
            }
        })
        console.log(packets)
    }

    return (
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
    )
}

export default Packet