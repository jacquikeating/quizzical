import { useState } from 'react'
import Splash from './components/Splash'
import Quiz from './components/Quiz'
import Answers from './components/Answers'
import { tempQuiz } from './utils'

function App() {
  const [quizStarted, setQuizStarted] = useState(true)
  const [quiz, setQuiz] = useState(tempQuiz)

  function startNewQuiz() {
    setQuizStarted(true)
  }
  
  return (
    <main>
      <img src="src/assets/blob-left.png" id="blob-left" aria-hidden="true" />
      <img src="src/assets/blob-right.png" id="blob-right" aria-hidden="true" />
      {!quizStarted? 
        (<Splash startNewQuiz={startNewQuiz} />) : 
        (<Quiz quiz={quiz} setQuiz={setQuiz} />)
      } 
    </main>
  )
}

export default App
