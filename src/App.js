import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard/dashboardIndex";
import UserDashboard from "./pages/users/UserDashboard";
import Users from "./pages/users/AllUsers";
import Login from "./pages/Login";
import Products from "./pages/products";
import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";

function App() {

  
  return (
    <div className="app">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/dashboard" element={ <> <Sidebar /> <Topbar /> <Dashboard /> </>}/>
          <Route path='/userDashboard' element={<> <Sidebar /> <Topbar /> <UserDashboard /> </>} />
          <Route path="/users" element={<> <Sidebar /> <Topbar /> <Users /> </>} />
          <Route path="/products" element={<> <Sidebar /> <Topbar /> <Products /> </>} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
