import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ContactManager from './components/ContactManager';

function App() {
  const [user, setUser] = useState(() => {
    // Check if there is a user in localStorage (if the user is logged in already)
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser).username : null;
  });

  const loginUser = (username) => {
    setUser(username);
  };

  const logoutUser = () => {
    // Remove user from localStorage and set user state to null
    // localStorage.removeItem('user');
    setUser(null);
  };

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
