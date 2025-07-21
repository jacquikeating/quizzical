import StartBtn from "./Button"

export default function Splash({ startNewQuiz }) {
    return (
        <section>
            <h1>Quizzical</h1>
            <p className="intro">Test your knowledge!</p>
            <StartBtn size="large" onClick={startNewQuiz}>Start quiz</StartBtn>
        </section>
    )
}