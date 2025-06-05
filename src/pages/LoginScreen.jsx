import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        email: formData.email
      }));
  
      navigate('/account-settings');
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Signin to your <br /> PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button className="login-button" type="submit" disabled={!formData.email || !formData.password}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;