import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './MainPage.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="logoname">
        <h1 className="head1">Dudd</h1>
      </div>
      <div className="firstSec">
      <button>
         <Link to="/MainPage">All Tools</Link>
      </button>
      <button className="btn2">Login</button>
      </div>
     
      <Routes>
        
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
      <div className="secSec">
        <h2 className="hm2">We Help With Your PDF Tasks</h2>
        <h3 className="hm3">Easy, pleasant and productive PDF editor</h3>
      </div>
      <div className="thirdSec">
        <button className="btn3">Edit a PDF document- it's a free</button>
      </div>
      
    </>
  )
}

export default App
