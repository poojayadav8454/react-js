import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home"; 
import AboutUs from "./about-us"; 

function Routspth() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/home" element={< Home />} />
         <Route path="/about" element={< AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routspth;
