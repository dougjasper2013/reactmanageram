import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (can be extended with more checks)
    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    // Simulate registration (in a real app, you'd save this to your backend)
    setTimeout(() => {
      // Save the user's email and login state to localStorage
      localStorage.setItem('loggedIn', JSON.stringify(true)); // Mark as logged in
      localStorage.setItem('loggedInUser', email); // Store the email or username

      // Clear any previous errors
      setError('');

      // Redirect to the ContactManager (home page after login)
      navigate('/contacts');
    }, 1000); // Simulate a delay (e.g., an API call)

  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
