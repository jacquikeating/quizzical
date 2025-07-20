export default function StartBtn({ context, startNewQuiz }) {

    let text = ""

    if (context === "start") {
        text = "Start quiz"
    } else if (context === "play-again") {
        text = "Play again"
    }

    return (
        <button id={context} onClick={startNewQuiz}>{text}</button>
    )
}