import { TextField } from '@mui/material'
import { useState } from 'react'



const Lines = ({ lineData, setLineData }) => {
    console.log(lineData)
    const handleChange = (event, key, index) => {
        const { value } = event.target
        setLineData(prevLineData => {
            return prevLineData.map((line, i) => {
                if (index == i) {
                    return {
                        ...line,
                        [key]: value
                    }
                } else {
                    return line
                }
            })
        })
    }

    return (
        <div className="line0, packetLines">
            {
                lineData.map((line, index) => {
                    return (
                        <div key={index}>
                            <h1>Line: {index}</h1>
                            {
                                Object.keys(line).map(key => {
                                    return (
                                        <TextField key={`${key}-${index}`} onChange={(event) => handleChange(event, key, index)} sx={{ width: "50px" }} id="outlined-basic" label={key} value={lineData[index][key]} variant="outlined" />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Lines