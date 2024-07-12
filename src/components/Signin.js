import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signin.css'; // Import the CSS file with styles

import signInImage from './images/logo.jpg'; // Import the background image

function SignIn({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to verify credentials
    console.log('Signing in with:', email, password);
    setIsLoggedIn(true);
    history('/home');
  };

  return (
    <div className='whole'>
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
      <div className="signup-image">
        <img src={signInImage} alt="Sign In" />
      </div>
      </div>
    </div>
  );
}

export default SignIn;
