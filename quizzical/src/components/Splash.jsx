import StartBtn from "./StartBtn"

export default function Splash({ startNewQuiz }) {
    return (
        <section>
            <h1>Quizzical</h1>
            <p className="intro">Test your knowledge!</p>
            <StartBtn context="start" startNewQuiz={startNewQuiz} />
        </section>
    )
}