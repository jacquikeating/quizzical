import { useState, useEffect } from 'react'
import Splash from './components/Splash'
import Quiz from './components/Quiz'
import Answers from './components/Answers'

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [quiz, setQuiz] = useState(null)
  const [completedQuiz, setCompletedQuiz] = useState(null)

  async function getQuizFromAPI() {
    const res = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
    const data = await res.json()
    const rawQuestions = data.results
    const questions = rawQuestions.map((q) => {
      const answerOptions = [...q.incorrect_answers]
      const randomIndex = Math.floor(Math.random() * 4)
      answerOptions.splice(randomIndex, 0, q.correct_answer)
      return ({...q, all_answers: answerOptions })
    })
    setQuiz(questions)
  }

  useEffect(() => {
    getQuizFromAPI()
  }, [])

  function startNewQuiz() {
    setQuizStarted(true)

    if (completedQuiz) {
        setCompletedQuiz(null)
        getQuizFromAPI()
    }
  }

  function renderContent() {
    if (completedQuiz) {
      return <Answers completedQuiz={completedQuiz} setQuizStarted={setQuizStarted} startNewQuiz={startNewQuiz} />
    } else if (quizStarted && !completedQuiz) {
      return <Quiz quiz={quiz} setCompletedQuiz={setCompletedQuiz} />
    } else if (!quizStarted) {
      return <Splash startNewQuiz={startNewQuiz} />    
    }
  }
  
  return (
    <main>
      <img src="src/assets/blob-left.png" id="blob-left" aria-hidden="true" />
      <img src="src/assets/blob-right.png" id="blob-right" aria-hidden="true" />
      {renderContent()}
    </main>
  )
}

export default App
