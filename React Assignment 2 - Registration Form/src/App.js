import React from 'react'
import './App.css';
function App() {
  return ( 
    <div className='container'>
      <div className='form'>
        <div className='head'>
           <h2>Registration form</h2>
        </div>
        <input type='text' placeholder='Full name' className='input-box' name='name'></input>
        <h6>Ex: Rajveer kumar</h6>
        <input type='text' placeholder='username' className='input-box' name='username'></input>
        <h6>Ex: @rajveer123</h6>
        <input type='text' placeholder='Email' className='input-box' name='email'></input>
        <h6>Ex: rajveerrks123@gmail.com</h6>
        <input type='password' placeholder='Password' className='input-box' name='password'></input>
        <h6>Ex: hshdh$133</h6>
        <input type='text' placeholder='Address' className='input-box' name='address'></input>
        <h6>Ex: alpha-1, greater noida</h6>
        <input type='button' value='Submit' className='submit'></input>
       </div>
   </div>
 );
}

export default App;
