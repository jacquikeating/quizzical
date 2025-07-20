import { useState } from 'react'
import Splash from './components/Splash'
import Quiz from './components/Quiz'

function App() {
  const [quizStarted, setQuizStarted] = useState(false)

  function startNewQuiz() {
    setQuizStarted(true)
  }
  
  return (
    <main>
      <img src="src/assets/blob-left.png" id="blob-left" aria-hidden="true" />
      <img src="src/assets/blob-right.png" id="blob-right" aria-hidden="true" />
      {!quizStarted? 
        (<Splash startNewQuiz={startNewQuiz} />) : 
        (<Quiz />)
      } 
    </main>
  )
}

export default App
