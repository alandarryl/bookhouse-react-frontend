import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from "../"
import "./style/auth.css";

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Données capturées :", { email, password});
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Bon retour !</h2>
                <p className="auth-subtitle">Connectez-vous pour gérer vos annonces</p>
                
                <form className="auth-form" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="votre@email.com" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="auth-btn">Se connecter</button>
                </form>

            </div>
        </div>
    );
}

export default LoginForm;