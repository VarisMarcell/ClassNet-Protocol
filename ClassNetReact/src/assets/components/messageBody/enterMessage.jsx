import { TextField } from "@mui/material"

const EnterMessage = ({funcNam, stateNam}) => {
    return (
        <section className="enterMessage">
            <h1>Message:</h1>
            <TextField onChange={funcNam} value={stateNam.message} id="filled-basic, fullWidth" label="Enter Message Here" variant="filled" />
        </section>
    )
}

export default EnterMessage