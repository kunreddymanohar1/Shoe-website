import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const[username,setUserName]= useState('');
   const [password,setPassword]=useState('');
   const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/Login', {username,password})
      .then(result =>{
        console.log(result)
        if(result.data ==="Success"){
          navigate('/')
        }
      })
      
    } catch (error) {
      console.log('Error Login:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleLoginClick = () => {
   
    navigate('/signup');
  };

  return (
    <div className="main">
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input type="text" name="username" placeholder="Enter Username" className="user" onChange={(e)=>setUserName(e.target.value)} />
          <br />
          <input type="password" name="password" placeholder="Enter Password" className="pass" onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <input type="submit" value="Login" className="btn" />
          <div>
            <p>Don't have an account?</p>
            {/* Use handleLoginClick function to navigate to the signup page */}
            <button onClick={handleLoginClick}>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
