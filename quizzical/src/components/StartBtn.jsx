export default function StartBtn({ context }) {

    let text = ""

    if (context === "splash") {
        text = "Start quiz"
    }

    return (
        <button className={context}>{text}</button>
    )
}