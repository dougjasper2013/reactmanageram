import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ContactManager from './components/ContactManager';

function App() {
  const [user, setUser] = useState(null); // Manage logged-in user

  const loginUser = (username) => setUser(username);
  const logoutUser = () => setUser(null);

  return (
    <Router>
      <Navbar user={user} logoutUser={logoutUser} />
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/contacts" /> : <Login loginUser={loginUser} />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/contacts" /> : <Register loginUser={loginUser} />}
        />
        <Route
          path="/contacts"
          element={user ? <ContactManager /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to={user ? "/contacts" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;

