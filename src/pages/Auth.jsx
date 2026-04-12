import React, { useState } from 'react';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import "./styles/authPage.css";

function Auth() {
    // true = Login, false = Register
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="auth-page-wrapper">
            <div className="auth-toggle-container">
                <div className="toggle-buttons">
                    <button 
                        className={isLogin ? "active" : ""} 
                        onClick={() => setIsLogin(true)}
                    >
                        Connexion
                    </button>
                    <button 
                        className={!isLogin ? "active" : ""} 
                        onClick={() => setIsLogin(false)}
                    >
                        Inscription
                    </button>
                    {/* Le petit fond qui glisse derrière les boutons */}
                    <div className={`selection-bg ${isLogin ? "left" : "right"}`}></div>
                </div>
            </div>

            <div className="auth-content-area">
                {isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    );
}

export default Auth;