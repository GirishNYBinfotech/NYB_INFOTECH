import React from "react";
import {Routes,Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                {/* Browser Routing */}
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                {/* Login */}
                <Route
                    path="/login"
                    element={<Login />}
                />
                {/* Protected Route */}
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />
                    {/* Nested Routing */}
                    <Route
                        path="/dashboard/profile"
                        element={<Profile />}
                    />
                </Route>
                {/* Dynamic Routing */}
                <Route
                    path="/users"
                    element={<Users />}
                />
                <Route
                    path="/users/:id"
                    element={<UserDetails />}
                />
                {/* Custom 404 */}
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </>
    );
}

export default App;