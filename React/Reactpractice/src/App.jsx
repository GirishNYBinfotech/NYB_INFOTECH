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
import Context from './pages/Practicepage_09-10-2026/Context'
import UserProfilepage from './pages/Practicepage_09-10-2026/UserProfilepage'
import Customhookpage from './pages/Practicepage_09-10-2026/Customhookpage'
import FetchDatapage from './pages/Practicepage_09-10-2026/FetchDatapage'
import Renderingpage from './pages/Practicepage_09-10-2026/Renderingpage'
import Employeepages from './pages/Practicepage_09-10-2026/Employeepages'
import EMPpage from './pages/Practicepage_12-10-2026/EMPpage'
import Layoutroute from './Components/Practice_12-10-2026/Nested route and layout/Layoutroute'
import Productpage from './pages/Practicepage_12-10-2026/Productpage'
import Mainroute from './Components/Practice_12-10-2026/Protected routes/Mainroute'
import Routess from './Components/Practice_12-10-2026/Multipages/Routess'
import RoutesS from './Components/Practice_12-10-2026/Protected-route/RoutesS'
import Usereduserpage from './pages/Practicepage_13-10-2026/Usereduserpage'
import Usereduserandusestate from './pages/Practicepage_13-10-2026/Usereduserandusestate'
import Operationpage from './pages/Practicepage_13-10-2026/Operationpage'
import Userpage from './pages/Practicepage_13-10-2026/Userpage'
import Emppages from './pages/Practicepage_13-10-2026/Emppages'
import Emppage2 from './pages/Practicepage_13-10-2026/Emppage2'
import Rerenderingpage from './pages/Practicepage14-10-2026/Rerenderingpage'
import Usememopage from './pages/Practicepage14-10-2026/Usememopage'
import Usecallbackpage from './pages/Practicepage14-10-2026/Usecallbackpage'
import Lazylodinf from './Components/Practice_14-10-2026/Lazyloding/Lazylodinf'
import EmpDashboardpage from './pages/Practicepage14-10-2026/EmpDashboardpage'

function App() {
  return (
    
    <BrowserRouter>
    {/* <EMPpage/> */}
    {/* <Layoutroute/> */}
    {/* <Mainroute/> */}
    {/* <Routess/> */}
    {/* <RoutesS/> */}
    {/* <EmpDetails/> */}
    {/* <Lazylodinf/> */}
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
        <Route path="/context" element={<Context/>} />
        <Route path="/user" element={<UserProfilepage/>} />
        <Route path="/reuse" element={<Customhookpage/>} />
        <Route path="/fetch" element={<FetchDatapage/>} />
        <Route path="/cRendering" element={<Renderingpage/>} />
        <Route path="/Emp1" element={<Employeepages/>} />
        <Route path="/pro" element={<Productpage/>} />
        <Route path="/count" element={<Usereduserpage/>} />
        <Route path="/stateandreduser" element={<Usereduserandusestate/>} />
        <Route path="/op" element={<Operationpage/>} />
        <Route path="/user1" element={<Userpage/>} />
        <Route path="/empp1" element={<Emppage2/>} />
        <Route path="/empp" element={<Emppages/>} />
        <Route path="/rerendring" element={<Rerenderingpage/>} />
        <Route path="/usememo" element={<Usememopage/>} />
        <Route path="/usecallback" element={<Usecallbackpage/>} />
        <Route path="/empdashboard" element={<EmpDashboardpage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App