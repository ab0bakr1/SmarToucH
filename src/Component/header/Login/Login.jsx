import { faCircleUser, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
    const [Overlay, setOverlay] = useState("overlay");
    const [LoginMenu , setLoginMenu] = useState("Login-menu");
    const Login =() =>{
      Overlay === "overlay" ? setOverlay ("overlay active") : setOverlay("overlay");
      LoginMenu === "Login-menu" ? setLoginMenu("Login-menu active") : setLoginMenu("Login-menu");
    }
    return (
      <div className='Login'>
        <div>
            <button className='Login-btn' onClick={Login}><FontAwesomeIcon icon={faCircleUser} style={{color: "#121212",}} /> Login</button>
        </div>
        <div className={LoginMenu}>
          <div className='Login-header'>
            <FontAwesomeIcon className='fs-2' onClick={Login} icon={faX} style={{color: "rgb(55, 115, 255)",}} />
          </div>
          <div className='Login-item'>
            <h2>demo mode</h2>
            <p className='mt-5 fs-5'>The website is still under trial and development</p>
          </div>
        </div>
        <div onClick={Login} className={Overlay}></div>
      </div>
    )
}

export default Login