import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Functionalpage from './pages/Functionalpage/Functionalpage'
import Multipage from './pages/Multipage/Multipage'
import Profilepage from './pages/profilepage/Profilepage'
import FoodApplictionppage from './pages/Food application/FoodApplictionppage'
import Propspage from './pages/Practicepage_06-10-2026/Propspage/propspage'
import Hierarchy from './pages/Practicepage_06-10-2026/hierarchypage/Hierarchy'
import Counterpage from './pages/Practicepage_06-10-2026/Counterpage/Counterpage'
import Conditionalpage from './pages/Practicepage_06-10-2026/Conditional rendering/Conditionalpage'
import Studentpage from './pages/Practicepage_06-10-2026/Studentmanagment page/Studentpage'
import Miniassignment from './pages/Practicepage_06-10-2026/Miniassignment/Miniassignment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/functional" element={<Functionalpage/>} />
        <Route path="/multipage" element={<Multipage/>} />
        <Route path="/profilepage" element={<Profilepage/>} />
        <Route path="/foodapp" element={<FoodApplictionppage/>} />
        <Route path="/props" element={<Propspage/>} />
        <Route path="/hierarchy" element={<Hierarchy/>} />
        <Route path="/counter" element={<Counterpage/>} />
        <Route path="/conditional" element={<Conditionalpage/>} />
        <Route path="/Student" element={<Studentpage/>} />
        <Route path="/productA" element={<Miniassignment/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App