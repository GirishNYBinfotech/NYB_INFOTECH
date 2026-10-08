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
import EventHandlingpage from './pages/Practicepage_07-10-2026/EventHandlingpage'
import FormHandlingpage from './pages/Practicepage_07-10-2026/FormHandlingpage'
import UserFormpage from './pages/Practicepage_07-10-2026/UserFormpage'
import Mappage from './pages/Practicepage_07-10-2026/Mappage'
import ConditionalRenderingpage from './pages/Practicepage_07-10-2026/ConditionalRenderingpage'
import Useeffectpage from './pages/Practicepage_07-10-2026/Useeffectpage'
import Registrationformpage from './pages/Practicepage_07-10-2026/Registrationformpage'
import Axiospage from './pages/Practicepage_08-10-2026/Axiospage'
import APIpage from './pages/Practicepage_08-10-2026/APIpage'
import APISF from './Components/Practice_08-10-2026/Search filter/APISF'
import Employeedatapage from './pages/Practicepage_08-10-2026/Employeedatapage'
import Datapage from './pages/Practicepage_08-10-2026/Datapage'

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
        <Route path="/Eventhandling" element={<EventHandlingpage/>} />
        <Route path="/formhandling" element={<FormHandlingpage/>} />
        <Route path="/Userform" element={<UserFormpage/>} />
        <Route path="/map" element={<Mappage/>} />
        <Route path="/conditionalR" element={<ConditionalRenderingpage/>} />
        <Route path="/Useeffect" element={<Useeffectpage/>} />
        <Route path="/Registration" element={<Registrationformpage/>} />
        <Route path="/axios" element={<Axiospage/>} />
        <Route path="/api" element={<APIpage/>} />
        <Route path="/apisf" element={<APISF/>} />
        <Route path="/emp" element={<Employeedatapage/>} />
        <Route path="/Data" element={<Datapage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App