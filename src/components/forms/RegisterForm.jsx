import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style/auth.css";

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Données du register :", {name, email, picture, password})
    }


    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Rejoignez BOOKHOUSE</h2>
                <p className="auth-subtitle">Créez votre compte en quelques secondes</p>
                
                <form className="auth-form" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input 
                            type="text" 
                            placeholder="JeanDupont" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

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

                    <div className="form-group">
                        <label>Photo de profil (URL)</label>
                        <input 
                        type="url" 
                        placeholder="https://..."
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="auth-btn">S'inscrire</button>
                </form>

            </div>
        </div>
    );
}

export default RegisterForm;