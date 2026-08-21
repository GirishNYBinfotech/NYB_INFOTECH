import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Routing/pages/Home';
import About from './Components/Routing/pages/About';
import Students from './Components/Routing/pages/Students';
import StudentDetails from './Components/Routing/pages/StudentDetails';
import Navbar from './Components/Routing/pages/Navbar';
import Employeelink from './Components/Routing/Employees/Employeelink';
// import Product from './Components/Routing/Products/Product';
import Mainroutes from './Components/Routing/ProtectedRoutes/User/Mainroutes';
import Shoppingcart from './Components/Routing/ProtectedRoutes/Fooddelivery/Shoppingcart';
import Hospital from './Components/Routing/Task/Hospita';
import FormPage from './Pages/PracticePages_17-08-2026/FormPage';
import Multplepage from './Pages/PracticePages_17-08-2026/Multplepage';
import Newformpage from './Pages/PracticePages_17-08-2026/Newformpage';
// import Loginformpage from './Pages/PracticePages_17-08-2026/Loginformpage';
import Skillformpage from './Pages/PracticePages_17-08-2026/Skillformpage';
import Dynamicformpage from './Pages/PracticePages_17-08-2026/Dynamicformpage';
import Registrationformpage from './Pages/PracticePages_17-08-2026/Registrationformpage';
import Apicallspage from './Pages/Practicepage_18-08-2026/Apicallspage';
import Products from './Components/Practice_18-08-2026/Query parameters/Product';
import Student from './Components/Practice_18-08-2026/Query parameters/Student';
import Gettingdatapage from './Pages/Practicepage_18-08-2026/Gettingdatapage';
import Task from './Components/Practice_18-08-2026/Api/API';
import APIPage from './Pages/Practicepage_18-08-2026/APIPage';
import Contextpage from './Pages/Practce_19-08-2026/Contextpage';
import Usereduserpage from './Pages/Practce_19-08-2026/Usereduserpage';
import Counterpage from './Pages/Practce_19-08-2026/Counterpage';
import Loginpage from './Pages/Practce_19-08-2026/Loginpage';
import Usermanagmentpage from './Pages/Practce_19-08-2026/Usermanagmentpage';
import Reactmemopage from './Pages/Practicepage_20-08-2026/Reactmemopage';
import Todopage from './Pages/Practicepage_20-08-2026/Todopage';
import Expensivepage from './Pages/Practicepage_20-08-2026/Expensivepage';
import Gradepage from './Pages/Practicepage_20-08-2026/Gradepage';
import Searchcallpage from './Pages/Practicepage_20-08-2026/Searchcallpage';
import Greetpage from './Pages/Practicepage_20-08-2026/Greetpage';
import Userprofilepage from './Pages/Practicepage_20-08-2026/Userprofilepage';
import Shoppingpage from './Pages/Practicepage_20-08-2026/Shoppingpage';
import Taskpage from './Pages/Practicepage_20-08-2026/Taskpage';
import Product from './Components/Practice_21-08-2026/Products/Product';
import Aboutstudent from './Components/Practice_21-08-2026/Student/Aboutstudent';
import AllDetails from './Components/Practice_21-08-2026/Restaurants/AllDetails';
import Linkup from './Components/Practice_21-08-2026/Protected_Routes/Linkup';
import Application from './Components/Practice_21-08-2026/Application/Application';



function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Employeelink/> */}
    {/* <Product/> */}
    {/* <Mainroutes/> */}
    {/* <Shoppingcart/> */}
    {/* <Hospital/> */}
    {/* <Product/> */}
    {/* <Aboutstudent/> */}
    {/* <AllDetails/> */}
    {/* <Linkup/> */}
    <Application/>
      <Routes>
       {/* <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
       <Route path="/students" element={<Students/>} />
       <Route path="/students/:id"element={<StudentDetails/>}/> */}
       <Route path="/Con&unCon" element={<FormPage/>}/>
       <Route path="/inputs" element={<Multplepage/>}/>
       <Route path="/formv" element={<Newformpage/>}/>
       {/* <Route path="/login" element={<Loginformpage/>}/> */}
       <Route path="/skillform" element={<Skillformpage/>}/>
       <Route path="/Dynamicform" element={<Dynamicformpage/>}/>
       <Route path="/Rform" element={<Registrationformpage/>}/>
       <Route path="/apicalls" element={<Apicallspage/>}/>
       <Route path="/producturl" element={<Products/>}/>
       <Route path="/studenturl" element={<Student/>}/>
       <Route path="/Error" element={<Gettingdatapage/>}/>
       <Route path="/Apisearch" element={<APIPage/>}/>
       <Route path="/context" element={<Contextpage/>}/>
       <Route path="/usereduser" element={<Usereduserpage/>}/>
       <Route path="/Counter" element={<Counterpage/>}/>
       <Route path="/loginr" element={<Loginpage/>}/>
       <Route path="/usermanagment" element={<Usermanagmentpage/>}/>
       <Route path="/Reactmemo" element={<Reactmemopage/>}/>
       <Route path="/Todo" element={<Todopage/>}/>
       <Route path="/Expensive" element={<Expensivepage/>}/>
       <Route path="/grade" element={<Gradepage/>}/>
       <Route path="/usecall" element={<Searchcallpage/>}/>
       <Route path="/greet" element={<Greetpage/>}/>
       <Route path="/Userprofile" element={<Userprofilepage/>}/>
       <Route path="/Shopping" element={<Shoppingpage/>}/>
       <Route path="/task" element={<Taskpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;