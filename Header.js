import React, { useState } from 'react'
import './App.css'
import { Formik } from 'formik';


function Header() {
  const [isLogin, setIsLogin]= useState(false);
  
  
  return (
    <Formik>
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button class={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
          <button class={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
        </div>
        
        {isLogin ?<>
      <div className='form'>
       <h2>Login Form</h2>
       <input type='email' placeholder='Email'/>
       <input type='password'placeholder='Password'/>
       <a href='#'>Forget Password?</a>
       <button>Login</button>
       <p>Not a Member? <a href='#' onClick={()=> setIsLogin(false)}>SignUp now</a></p>

    </div>
    </> : <>
    <div className='form'>
       <h2>SignUp</h2>
       <input type='email' placeholder='Email'/>
       <input type='password'placeholder='Password'/>
       <input type='password'placeholder='Confirm Password'/>
       <button>SignUp</button>
       </div>
       
    
    </>}
    </div>
    </div>
    </Formik>
    
  )
}
export default Header