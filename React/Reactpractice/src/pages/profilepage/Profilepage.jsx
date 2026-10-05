import React from 'react'
import "../../Components/practice_05-10-2026/Mini Assignment/style.css"
import Header from '../../Components/practice_05-10-2026/Mini Assignment/Header'
import Profile from '../../Components/practice_05-10-2026/Mini Assignment/profile'
import Education from '../../Components/practice_05-10-2026/Mini Assignment/Education'
import Skills from '../../Components/practice_05-10-2026/Mini Assignment/Skills'
import Footer from '../../Components/practice_05-10-2026/Mini Assignment/Footer'

const Profilepage=()=>{
  return (
    <div>
        <Header/>
        <Profile/>
        <Education/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Profilepage