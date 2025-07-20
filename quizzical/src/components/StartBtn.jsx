export default function StartBtn({ context, startNewQuiz }) {

    let text = ""

    if (context === "start") {
        text = "Start quiz"
    }

    return (
        <button className={context} onClick={startNewQuiz}>{text}</button>
    )
}