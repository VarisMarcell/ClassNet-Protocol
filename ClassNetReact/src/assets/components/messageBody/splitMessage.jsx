import Lines from "../splitLines"

const SplitMessage = ({lines, lineData, setLineData}) => {
    const arrayOfLines = []
    for (let i = 0; i < lines; i++) {
        arrayOfLines.push(<Lines lineData={lineData} setLineData={setLineData} Key={i} />);
        }

    return (
        <section className="splitMessage">
            <h1>Split Message:</h1>
            <section className='splitMessageInputs'>
                {arrayOfLines}
            </section>
        </section>
    )
}

export default SplitMessage