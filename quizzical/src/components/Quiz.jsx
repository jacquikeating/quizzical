export default function Quiz({ quiz, setCompletedQuiz}) {

    function handleSubmit(formData) {

        let completedQuiz = quiz.map((q, index) => {
            let selectedAnswer = formData.get(`q${index}`)
            let isCorrect = selectedAnswer == q.correct_answer
            let completedQuestion = {...q, selected_answer: selectedAnswer, isCorrect: isCorrect}
            return (completedQuestion)
        })

        console.log(completedQuiz)
        setCompletedQuiz(completedQuiz)
    }
    
    return (
        <form action={handleSubmit}>

            {quiz.map((q, index) => {
                let questionNum = `q${index}`

                return (
                    <article className="question" key={questionNum}>
                        <legend>{q.question}</legend>

                        <div className="answer-options">
                            {q.all_answers.map((a, index) => {
                            const answerNum = questionNum + "a" + index

                            return (
                                <div key={answerNum} className="answer">
                                    <input type="radio" name={questionNum} value={a} id={answerNum} className="radio-input" />
                                    <label htmlFor={answerNum}>{a}</label>
                                </div> 
                            )
                        })}
                        </div>
                        
                    </article>
                )
            })}
            <button id="check-answers">Check answers</button>
        </form>
    )
}