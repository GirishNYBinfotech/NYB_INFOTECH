import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";


function New() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
  )
}

export default New