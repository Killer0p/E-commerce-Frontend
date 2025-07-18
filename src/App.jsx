import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyOtp from "./Pages/VerifyOtp";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
     <BrowserRouter >
      <Navbar/>

     <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/verify-otp" element={<VerifyOtp/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
    

     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
