import Button from "./Button/Button";

export default function Quiz({ quiz, setCompletedQuiz, getQuizFromAPI }) {
  function handleSubmit(formData) {
    let completedQuiz = quiz.map((q, index) => {
      let selectedAnswer = formData.get(`q${index}`);
      let isCorrect = selectedAnswer == q.correct_answer;
      let completedQuestion = {
        ...q,
        selected_answer: selectedAnswer,
        isCorrect: isCorrect,
      };
      return completedQuestion;
    });

    setCompletedQuiz(completedQuiz);
  }

  return (
    <>
      {quiz ? (
        <form action={handleSubmit}>
          {quiz.map((q, index) => {
            let questionNum = `q${index}`;

            return (
              <article className="question" key={questionNum}>
                <legend>{q.question}</legend>

                <div className="answer-options">
                  {q.all_answers.map((a, index) => {
                    const answerNum = questionNum + "a" + index;

                    return (
                      <div key={answerNum} className="answer">
                        <input
                          type="radio"
                          name={questionNum}
                          value={a}
                          id={answerNum}
                          className="radio-input"
                        />
                        <label htmlFor={answerNum}>{a}</label>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
          <Button size="medium">Check answers</Button>
        </form>
      ) : (
        <div className="quiz-fallback">
          <h2>Something went wrong!</h2>
          <p>Give it a sec and try again.</p>
          <Button size="medium" onClick={getQuizFromAPI}>
            Try again
          </Button>
        </div>
      )}
    </>
  );
}
