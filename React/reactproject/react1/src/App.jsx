import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Routing/pages/Home';
import About from './Components/Routing/pages/About';
import Students from './Components/Routing/pages/Students';
import StudentDetails from './Components/Routing/pages/StudentDetails';
import Navbar from './Components/Routing/pages/Navbar';
import Employeelink from './Components/Routing/Employees/Employeelink';
import Product from './Components/Routing/Products/Product';
import Mainroutes from './Components/Routing/ProtectedRoutes/User/Mainroutes';
import Shoppingcart from './Components/Routing/ProtectedRoutes/Fooddelivery/Shoppingcart';
import Hospital from './Components/Routing/Task/Hospita';
import FormPage from './Pages/PracticePages_17-08-2026/FormPage';
import Multplepage from './Pages/PracticePages_17-08-2026/Multplepage';
import Newformpage from './Pages/PracticePages_17-08-2026/Newformpage';
import Loginformpage from './Pages/PracticePages_17-08-2026/Loginformpage';
import Skillformpage from './Pages/PracticePages_17-08-2026/Skillformpage';
import Dynamicformpage from './Pages/PracticePages_17-08-2026/Dynamicformpage';
import Registrationformpage from './Pages/PracticePages_17-08-2026/Registrationformpage';



function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Employeelink/> */}
    {/* <Product/> */}
    {/* <Mainroutes/> */}
    {/* <Shoppingcart/> */}
    {/* <Hospital/> */}
      <Routes>
       {/* <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
       <Route path="/students" element={<Students/>} />
       <Route path="/students/:id"element={<StudentDetails/>}/> */}
       <Route path="/Con&unCon" element={<FormPage/>}/>
       <Route path="/inputs" element={<Multplepage/>}/>
       <Route path="/formv" element={<Newformpage/>}/>
       <Route path="/login" element={<Loginformpage/>}/>
       <Route path="/skillform" element={<Skillformpage/>}/>
       <Route path="/Dynamicform" element={<Dynamicformpage/>}/>
       <Route path="/Rform" element={<Registrationformpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;