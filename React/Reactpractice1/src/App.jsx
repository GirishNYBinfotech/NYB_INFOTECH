import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reusablepages from './pages/Practicepage_21-10-2026/Reusablepages'
import Jsexpressiopage from './pages/Practicepage_21-10-2026/Jsexpressiopage'
import Propspage from './pages/Practicepage_21-10-2026/Propspage'
import Relationshippage from './pages/Practicepage_21-10-2026/Relationshippage'
import Usestatepage from './pages/Practicepage_21-10-2026/Usestatepage'
import Eventhandlingpage from './pages/Practicepage_21-10-2026/Eventhandlingpage'
import Controlledformspage from './pages/Practicepage_21-10-2026/controlledformspage'
import Formpage from './pages/Practicepage_21-10-2026/Formpage'
import Listrendering from './pages/Practicepage_21-10-2026/Listrendering'
import ConditionalRenderingPage from './pages/Practicepage_21-10-2026/ConditionalRenderingPage'
import Studentpage from './pages/Practicepage_21-10-2026/Studentpage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/reusablepages" element={<Reusablepages/>} />
      <Route path="/jsxexpression" element={<Jsexpressiopage/>} />
      <Route path="/props" element={<Propspage/>} />
      <Route path="/relation" element={<Relationshippage/>} />
      <Route path="/Usestate" element={<Usestatepage/>} />
      <Route path="/eventhandling" element={<Eventhandlingpage/>} />
      <Route path="/Controlled" element={<Controlledformspage/>} />
      <Route path="/Formpage" element={<Formpage/>} />
      <Route path="/listrender" element={<Listrendering/>} />
      <Route path="/Conditionalrender" element={<ConditionalRenderingPage/>} />
      <Route path="/student" element={<Studentpage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App