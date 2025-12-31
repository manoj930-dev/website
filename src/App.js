import React from 'react'
import './App.css';
import Home from './components/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';

const App = () => {
  return (
    <>
      <Routes>

   
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
    </>
  )
}

export default App
