import { TextField } from '@mui/material'
import { useState } from 'react'

const Lines = ({lineData, setLineData, Key}) => {
    // setLineData({
    //         id: {Key},
    //         "zero": " ",
    //         "one": " ",
    //         "two": " ",
    //         "three": " ",
    //         "four": " ",
    //         "five": " ",
    //         "six": " ",
    //         "seven": " ",
    //         "eight": " ",
    //         "nine": " ",
    //         "A": " ",
    //         "B": " ",
    //         "C": " ",
    //         "D": " ",
    //         "E": " ",
    //         "F": " ",
    // })

    // const handleChange = (event) => {
    //     const {name, value} = event.target
    //     setLineData(prevState => {
    //         return {
    //             ...prevState,
    //             [name]: value
    //         }
    //     })
    //     console.log(state)
    // }

    return (
        <div className="line0, packetLines">
            <h1>Line: {Key}</h1>
            {/* <TextField sx={{ width: "50px" }} onChange={handleChange} name={"zero"} value={lineData.zero} id="outlined-basic" label="0" variant="outlined" />
            <TextField sx={{ width: "50px" }} onChange={handleChange} name={"one"} value={lineData.one} id="outlined-basic" label="1" variant="outlined" /> */}
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
    )
}

export default Lines