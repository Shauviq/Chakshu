import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Faceid from "../Pages/Faceid";
import Database from "../Pages/Database";


function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/faceid" element={<Faceid />} />
            <Route path="/viewdata" element={<Database />} />
        </Routes>
    );
};

export default CustomRoutes;
