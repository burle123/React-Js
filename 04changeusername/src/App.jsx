import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  let username = "JohnDoe";

  //  const changeUser = () => {
  //   console.log(username)
  //   username = "Shantanu"
  //   console.log(username)
  //  }

  const [username, setUsername] = useState('JohnDoe') 
  const changeUser=()=>{
    setUsername("Shantanu")
  }
  return (
    <>
      <h1>Username is {username}</h1>

      <button onClick={changeUser}>Change User</button>
    </>
  )
}

export default App
