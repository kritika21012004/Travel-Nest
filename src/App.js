import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import { Register } from "./components/register/Register";
import {Login} from "./components/login/Login";


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/register/Register" element={<Register/>}/>
        <Route path="/login/Login" element={<Login/>}/>
        {/* currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
