import StartBtn from "./StartBtn"

export default function Splash() {
    return (
        <section>
            <h1>Quizzical</h1>
            <p className="intro">Test your knowledge!</p>
            <StartBtn context="splash" />
        </section>
    )
}