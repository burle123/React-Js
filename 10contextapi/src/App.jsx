 
 
import { use } from 'react'
import './App.css'
import { useContext } from 'react'
import { DataContext } from './context/UserContext'
function App() {
   
  const data = useContext(DataContext)
  console.log(data)

  return (
    <>
      <div>
        <h1>Context API</h1>
        <h2>Welcome to React Context API {data}</h2>
        <p>This is App.jsx</p>
      </div>
    </>
  )
}

export default App
