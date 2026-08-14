import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Home1 from './Home1';
import About1 from './About1';
import Employees from './Employees';

const Employeelink = () => {
  return (
    <>
    <h2>Employees</h2>
    <nav>
        <Link to='/'>Home</Link>|{" "}
        <Link to='/About'>About</Link>|{" "}
        <Link to='/Employees'>Employees</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/About' element={<About1/>}/>
      <Route path='/Employees' element={<Employees/>}/>
    </Routes>
    </>
    
  )
}

export default Employeelink