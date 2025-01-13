import React, { useState } from 'react';

const Login = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the user object from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if user exists and the password matches
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      loginUser(username);  // Log in the user
    } else {
      setError('Invalid username or password');  // Show error if credentials are incorrect
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
