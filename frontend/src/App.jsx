import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import './App.css'
import Menu from './components/Menu';
import About from './components/About';
import Qualities from './components/Qualities';
import Team from './components/Team';
import Reservation from './components/Reservation';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/qualities' element={<Qualities/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
        
      </Router>
    </>
  )
}

export default App
