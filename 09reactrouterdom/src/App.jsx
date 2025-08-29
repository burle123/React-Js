 
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product' 
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
 


function App() {
 

  return (
    <>
      <div>
        
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/About' element= {<About/>}/>
          <Route path='/Contact' element= {<Contact/>}/>
          <Route path='/Product' element= {<Product/>}/>      
        </Routes>
        <Footer/>

      </div>
    </>
  )
}

export default App
