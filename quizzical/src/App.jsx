import { useState } from 'react'
import Splash from './components/Splash'
import Quiz from './components/Quiz'

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  
  return (
    <main>
      {!quizStarted? 
        (<Splash />) : 
        (<Quiz />)
      }
    </main>
  )
}

export default App
