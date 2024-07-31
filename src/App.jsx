import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <div className='mainBody'>
    <BrowserRouter>
    <Nav />
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>
    
    </BrowserRouter>
    <Footer />
    </div>
    </>
  )
}

export default App
