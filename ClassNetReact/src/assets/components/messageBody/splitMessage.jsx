import Lines from "../splitLines"

const SplitMessage = () => {
    return (
        <section className="splitMessage">
            <h1>Split Message:</h1>
            <section className='splitMessageInputs'>
                <Lines />
                <Lines />
                <Lines />
                <Lines />
            </section>
        </section>
    )
}

export default SplitMessage