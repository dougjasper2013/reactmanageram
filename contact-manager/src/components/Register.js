import React, { useState } from 'react';

const Register = ({ loginUser }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username); // Automatically log in after registration
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
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
  );
};

export default Register;

