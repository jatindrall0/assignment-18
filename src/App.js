import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp setUser={setUser} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

