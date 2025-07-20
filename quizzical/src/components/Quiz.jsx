export default function Quiz({ quiz, setQuiz}) {

    function handleSubmit(formData) {

        let completedQuiz = quiz.map((q, index) => {
            let selectedAnswer = formData.get(`q${index}`)
            let isCorrect = selectedAnswer == q.correct_answer
            let completedQuestion = {...q, selected_answer: selectedAnswer, isCorrect: isCorrect}
            return (completedQuestion)
        })

        console.log(completedQuiz)
        setQuiz(completedQuiz)
    }
    
    return (
        <form action={handleSubmit}>
            {quiz.map((q, index) => {
                let questionNum = `q${index}`

                return (
                    <article className="question" key={questionNum}>
                        <legend>{q.question}</legend>
                        {q.all_answers.map((a, index) => {
                            return (
                                <label key={index}>
                                    <input type="radio" name={questionNum} value={a} />
                                    {a}
                                </label>
                            )
                        })}
                    </article>
                )
            })}
            <button id="check-answers">Check answers</button>
        </form>
    )
}