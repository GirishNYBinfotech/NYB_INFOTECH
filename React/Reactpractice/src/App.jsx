import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Functionalpage from './pages/Functionalpage/Functionalpage'
import Multipage from './pages/Multipage/Multipage'
import Profilepage from './pages/profilepage/Profilepage'
import FoodApplictionppage from './pages/Food application/FoodApplictionppage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/functional" element={<Functionalpage/>} />
        <Route path="/multipage" element={<Multipage/>} />
        <Route path="/profilepage" element={<Profilepage/>} />
        <Route path="/foodapp" element={<FoodApplictionppage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App