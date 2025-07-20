import { useState } from 'react'
import Splash from './components/Splash'
import Quiz from './components/Quiz'
import Answers from './components/Answers'
import { tempQuiz } from './utils'

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [quiz, setQuiz] = useState(tempQuiz)
  const [completedQuiz, setCompletedQuiz] = useState(null)

  function startNewQuiz() {
    setQuizStarted(true)
    setCompletedQuiz(null)
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
