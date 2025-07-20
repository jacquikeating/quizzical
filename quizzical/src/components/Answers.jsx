import { clsx } from "clsx"
import StartBtn from "./StartBtn"

export default function Answers({ completedQuiz, setQuizStarted, startNewQuiz }) {

    return (
        <>
            <section className="quiz-answers">
                {completedQuiz.map((q, index) => {
                    let questionNum = `q${index}`

                    return (
                        <article className="question" key={questionNum}>
                            <h2>{q.question}</h2>

                            <div className="answer-options">
                                {q.all_answers.map((a, index) => {
                                const answerNum = questionNum + "a" + index
                                const clsxClasses = clsx("revealed-answer", {
                                    correct: a === q.correct_answer,
                                    incorrect: a === q.selected_answer && a !== q.correct_answer
                                })

                                return (
                                    <div key={answerNum} className={clsxClasses}>
                                        <p>{a}</p>
                                    </div> 
                                )
                            })}
                            </div> 
                        </article>
                    )
                })}
            </section>
            <section className="after-quiz">
                <p>You scored x correct answers</p>
                <StartBtn startNewQuiz={startNewQuiz} context={"play-again"} />
            </section>
        </>
    )
    
}