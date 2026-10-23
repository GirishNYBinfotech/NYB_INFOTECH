import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'

const Mainpage = () => {
  return (
    <>
    <h1>Navigations</h1>
    <nav>
        <Link to='/'>Home</Link> |
        <Link to='/About'>About</Link> |
        <Link to='/Dashboard'>Dashboard</Link>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default Mainpage