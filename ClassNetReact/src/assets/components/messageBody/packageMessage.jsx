import Packet from "../packet"

const PackageMessages = () => {
    return (
        <section className="packageMessage">
            <h1>Packet Messages:</h1>
            <section className="allPackets">
                <Packet />
                <Packet />
                <Packet />
            </section>
        </section>
    )
}

export default PackageMessages