import React, { useState } from 'react'
import './LoginAuth.css'
import profile_icon from '../Assests/LoginAuth/profile_icon.png'
import password_icon from '../Assests/LoginAuth/password_icon.png'
import email_icon from '../Assests/LoginAuth/email_icon.png'

const LoginAuth = () => {

    const [action, setAction] = useState("Sign Up")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:   <div className="input">
                <img src={profile_icon} alt="" />
                <input type="text" placeholder='User login' />
            </div>}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='User mail'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='User password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">
            Forgot password? <span>Click here</span>
        </div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{
                setAction("Sign Up")
            }}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{
                setAction("Login")
            }}>Login</div>
        </div>
    </div>
  )
}

export default LoginAuth
