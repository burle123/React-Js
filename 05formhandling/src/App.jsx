import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [uname, setName] = useState("");

    const submitHandler = (e) => {
    e.preventDefault();
     
    const name = e.target[0].value;
   console.log(name);
    setName(name);
    e.target[0].value = "";
    alert(`Form Submitted! Welcome ${name}`);
   }  

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter Name' /><br /><br />
        <input type="email" placeholder='Enter Email' /><br /><br />
        <input type="password" placeholder='Enter Password' /><br /><br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
