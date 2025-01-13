import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logoutUser }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/contacts">Contacts</Link></li>
        {user ? (
          <>
            <li>Welcome, {user}</li>
            <li><button onClick={logoutUser}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
