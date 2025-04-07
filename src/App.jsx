import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Landingpage/Home/Home";
import LandingPage from './Landingpage/LandingPage'
import Dashboard from './Dashboard/Dashboard'
import LoginForm  from "./Dashboard/Auth/LoginForm"

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Landing page and authentication routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          
          {/* Dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/admin" element={<Dashboard />} />
          <Route path="/dashboard/manager" element={<Dashboard />} />
          <Route path="/dashboard/employee" element={<Dashboard />} />
          
          {/* Redirect any unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App