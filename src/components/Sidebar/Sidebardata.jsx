
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function Sidebardata() {
  return (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
        <Routes>
            <Route path='/' icon="" element={<Home/>}/>
            <Route path='/about'icon=" " element={<About/>}/>
            <Route path='/contact' icon=""element={<Contact/>}/>
        </Routes>
    </Router>
  )
}

export default Sidebardata