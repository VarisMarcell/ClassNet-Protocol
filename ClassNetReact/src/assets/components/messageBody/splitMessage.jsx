import Lines from "../splitLines"

const SplitMessage = ({lineData, setLineData}) => {
    return (
        <section className="splitMessage">
            <h1>Split Message:</h1>
            <section className='splitMessageInputs'>
                <Lines lineData={lineData} setLineData={setLineData}/>
            </section>
        </section>
    )
}

export default SplitMessage