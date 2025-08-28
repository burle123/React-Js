import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Shantanu" age={21} isStudent = "true"/>
      <Student name="Anish" age={21} isStudent = "true"/>
      <Student name="Gaurav" age={27} isStudent = "false"/>
    </>
  )
}

export default App
