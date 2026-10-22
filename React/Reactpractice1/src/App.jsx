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
import Useeffectpage from './pages/Practicepage_22-10-2026/Useeffectpage'
import Cleeanupfunctionpage from './pages/Practicepage_22-10-2026/Cleeanupfunctionpage'
import RestApipage from './pages/Practicepage_22-10-2026/RestApipage'
import Operationpage from './pages/Practicepage_22-10-2026/Operationpage'
import Apipage from './pages/Practicepage_22-10-2026/Apipage'
import Contextpage from './pages/Practicepage_22-10-2026/Contextpage'
import Propdrillingpage from './pages/Practicepage_22-10-2026/Propdrillingpage'
import Usereduserpage from './pages/Practicepage_22-10-2026/Usereduserpage'
import Reduserpage from './pages/Practicepage_22-10-2026/Reduserpage'
import Customhookpage from './pages/Practicepage_22-10-2026/Customhookpage'
import Apicustomhookpage from './pages/Practicepage_22-10-2026/Apicustomhookpage'
import Usermanagmentpage from './pages/Practicepage_22-10-2026/Usermanagmentpage'

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
      <Route path="/useeffect" element={<Useeffectpage/>} />
      <Route path="/cleanup" element={<Cleeanupfunctionpage/>} />
      <Route path="/restapi" element={<RestApipage/>} />
      <Route path="/operation" element={<Operationpage/>} />
      <Route path="/api" element={<Apipage/>} />
      <Route path="/context" element={<Contextpage/>} />
      <Route path="/propsdriling" element={<Propdrillingpage/>} />
      <Route path="/usereduser" element={<Usereduserpage/>} />
      <Route path="/reduser" element={<Reduserpage/>} />
      <Route path="/Customhook" element={<Customhookpage/>} />
      <Route path="/apiCustomhook" element={<Apicustomhookpage/>} />
      <Route path="/usermanagment" element={<Usermanagmentpage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App