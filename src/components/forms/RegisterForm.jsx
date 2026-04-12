import React from 'react';
import { Link } from 'react-router-dom';
import "./style/auth.css";

function RegisterForm() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Rejoignez BOOKHOUSE</h2>
                <p className="auth-subtitle">Créez votre compte en quelques secondes</p>
                
                <form className="auth-form">
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input type="text" placeholder="JeanDupont" required />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="votre@email.com" required />
                    </div>
                    
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input type="password" placeholder="********" required />
                    </div>

                    <div className="form-group">
                        <label>Photo de profil (URL)</label>
                        <input type="url" placeholder="https://..." />
                    </div>

                    <button type="submit" className="auth-btn">S'inscrire</button>
                </form>

                {/* <p className="auth-switch">
                    Déjà inscrit ? <Link to="/login">Se connecter</Link>
                </p> */}
            </div>
        </div>
    );
}

export default RegisterForm;