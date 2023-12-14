import React from 'react'
import './LoginAuth.css'
import profile_icon from '../Assests/LoginAuth/profile_icon.png'
import password_icon from '../Assests/LoginAuth/password_icon.png'
import email_icon from '../Assests/LoginAuth/email_icon.png'

const Login = () => {


  return (
    <div className='container'>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {/* <div className="input">
                <img src={profile_icon} alt="" />
                <input type="text" placeholder='login' />
            </div> */}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='mail'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='password'/>
            </div>
        </div>
        <div className="forgot-password">
            Forgot password? <span>Click here</span>
        </div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>

        </div>
    </div>
  )
}

export default Login
