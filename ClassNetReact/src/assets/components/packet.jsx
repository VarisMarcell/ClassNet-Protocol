import { TextField } from '@mui/material'
import { useState } from 'react'

const Packet = ({ packetDataHeader, setPacketDataHeader, packetDataBody, setPacketDataBody }) => {
    console.log("packet data hf")
    console.log(packetDataHeader)
    const handleChangeHeader = (event, key, index) => {
        const { value } = event.target
        setPacketDataHeader(prevPacketData => {
            return prevPacketData.map((packet, i) => {
                if (index == i) {
                    return {
                        ...packet,
                        [key]: value
                    }
                } else {
                    return packet
                }
            })
        })
    }

    const handleChangeBody = (event, key, index) => {
        const { value } = event.target
        setPacketDataBody(prevPacketData => {
            return prevPacketData.map((packet, i) => {
                if (index == i) {
                    return {
                        ...packet,
                        [key]: value
                    }
                } else {
                    return packet
                }
            })
        })
    }
    return (
        <section className="packet0, packet">
            <div className="packetHeader">
                <h1>Header:</h1>
                <section className="packetHeaderSection">
                    <h1>Source:</h1>
                    <TextField onChange={handleChangeHeader} sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                    <TextField onChange={handleChangeHeader} sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                    <TextField onChange={handleChangeHeader} sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
                </section>
                <section className="packetHeaderSection">
                    <h1>Destination:</h1>
                    <TextField onChange={handleChangeHeader} sx={{ width: "100px" }} id="outlined-basic" label="Section" variant="outlined" />
                    <TextField onChange={handleChangeHeader} sx={{ width: "100px" }} id="outlined-basic" label="Row" variant="outlined" />
                    <TextField onChange={handleChangeHeader} sx={{ width: "100px" }} id="outlined-basic" label="Seat" variant="outlined" />
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
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="0" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="1" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="2" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="3" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="4" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="5" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="6" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="7" variant="outlined" />
                </div>
                <div>
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="8" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="9" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="A" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="B" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="C" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="D" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="E" variant="outlined" />
                    <TextField onChange={handleChangeBody} sx={{ width: "50px" }} id="outlined-basic" label="F" variant="outlined" />
                </div>
            </div>
        </section>


        // <div key={index}>
        //     <h1>Line: {index}</h1>
        //     {
        //         Object.keys(line).map(key => {
        //             return (
        //                 <TextField key={`${key}-${index}`} onChange={(event) => handleChange(event, key, index)} sx={{ width: "50px" }} id="outlined-basic" label={key} value={lineData[index][key]} variant="outlined" />
        //             )
        //         })
        //     }
        // </div>
    )
}

export default Packet