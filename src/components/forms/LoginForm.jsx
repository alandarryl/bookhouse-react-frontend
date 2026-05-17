import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from "../../utils/axiosConfig"
import "./style/auth.css";

function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');
        console.log("Données capturées :", { email, password});

        const credentials = { email, password };

        try {
            const response = await api.post('/user/login', credentials);

            if(response.status === 200){
                console.log("Connexion réussi !", response.data);

                navigate('/dashboard');
            }

        } catch (error) {
            console.log("Erreur de connexion :", error.response?.data);
            setError(error.response?.data?.message || "Email ou mot de passe incorrect.")
        }

    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Bon retour !</h2>
                {error && <div className="error-message" style={{color: '#ef4444', marginBottom: '15px', fontWeight: 'bold'}}>{error}</div>}
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