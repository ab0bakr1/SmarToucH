import { faCircleUser, faXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLogin = () => setIsOpen(!isOpen);

    return (
        <div className='login-container'>
            {/* زر الدخول في النافبار */}
            <button className='login-trigger-btn' onClick={toggleLogin}>
                <FontAwesomeIcon icon={faCircleUser} />
                <span>Login</span>
            </button>

            {/* نافذة تسجيل الدخول (Modal) */}
            <div className={`modern-login-modal ${isOpen ? "active" : ""}`}>
                <div className='login-card'>
                    <button className='close-login-btn' onClick={toggleLogin}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    
                    <div className='login-content'>
                        <div className='demo-badge'>
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <span>System Notice</span>
                        </div>
                        
                        <h2 className='login-title'>Demo Mode</h2>
                        <div className='title-divider'></div>
                        
                        <p className='login-description'>
                            Our authentication system is currently under 
                            <span className='highlight'> development</span>. 
                            Full access will be available in the next update.
                        </p>
                        
                        <button className='login-confirm-btn' onClick={toggleLogin}>
                            Got it, thanks!
                        </button>
                    </div>
                </div>
            </div>

            {/* الخلفية المظلمة */}
            <div onClick={toggleLogin} className={`login-overlay ${isOpen ? "active" : ""}`}></div>
        </div>
    );
}

export default Login;
