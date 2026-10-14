import React, { lazy, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Home=lazy(()=>import("./Home"))
const About=lazy(()=>import("./About"))
const Profile=lazy(()=>import("./Profile"))

const Lazylodinf = () => {
  return (
    <>
    <h2>Navigations of lazy loding</h2>
    <nav>
        <Link to='/'>Home</Link> |
        <Link to='/About'>About</Link> |
        <Link to='/Profile'>Profile</Link>
    </nav>
    <Suspense fallback={<h3>loding..</h3>}>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    </Suspense>
    </>
  )
}

export default Lazylodinf