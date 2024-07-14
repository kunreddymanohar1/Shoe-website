import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

import './Signup.css';

const Signup = () => {
   const[name,setName] = useState('');
   const[email,setEmail] = useState('');
   const[username,setUserName]= useState('');
   const [password,setPassword]=useState('');
   




  // const history = useNavigate();

  // const handleInputChange = (e) => {
    
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://127.0.0.1:8000/Signup', {name,email,username,password});
      console.log(response.data);
      alert('Signup successful!');
      
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="main">
      <div className="signup-page">
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <input type="text" name="name" placeholder='Enter Your Name' className='name1' onChange={(e)=>setName(e.target.value)} />
          <br />
          <input type="text" name="email" placeholder='Enter Your Email' className='email' onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <input type="text" name="username" placeholder='Enter Username' className='user' onChange={(e)=>setUserName(e.target.value)} />
          <br />
          <input type="password" name="password" placeholder='Enter the password' className='pass' onChange={(e)=>setPassword(e.target.value)} />
          <br />
          
          <input type="submit" value="Signup" className='btn2' />
          <div>
            <p>Already have an account?</p>
            <Link to='/Login'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
