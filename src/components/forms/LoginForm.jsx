import React from 'react';
import { Link } from 'react-router-dom';
import "./style/auth.css";

function LoginForm() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Bon retour !</h2>
                <p className="auth-subtitle">Connectez-vous pour gérer vos annonces</p>
                
                <form className="auth-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="votre@email.com" required />
                    </div>
                    
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input type="password" placeholder="********" required />
                    </div>

                    <button type="submit" className="auth-btn">Se connecter</button>
                </form>

                {/* <p className="auth-switch">
                    Pas encore de compte ? <Link to="/register">Créer un compte</Link>
                </p> */}
            </div>
        </div>
    );
}

export default LoginForm;