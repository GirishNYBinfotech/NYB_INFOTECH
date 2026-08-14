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



function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Employeelink/> */}
    {/* <Product/> */}
    {/* <Mainroutes/> */}
    <Shoppingcart/>
    {/* <Hospital/> */}
      <Routes>
       {/* <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
       <Route path="/students" element={<Students/>} />
       <Route path="/students/:id"element={<StudentDetails/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;