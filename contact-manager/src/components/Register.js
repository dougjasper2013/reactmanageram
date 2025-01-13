import React, { useState } from 'react';

const Register = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = { username, password };

    // Save the user to localStorage (simulating a simple user database)
    localStorage.setItem('user', JSON.stringify(newUser));

    // Automatically log the user in
    loginUser(username);
  };

  return (
    <div className="container">
      <h2 className="my-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Choose a Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
  );
};

export default Register;
