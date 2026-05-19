import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style/auth.css";
import { useNavigate } from 'react-router-dom';
import api from '../../utils/axiosConfig';

import { useAuth } from '../../context/AuthContext';

function RegisterForm() {
    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [username, setUsername] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [image_profil, setImage_profil] = useState('');

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const newUser = {
            username,
            email,
            password,
            image_profil
        }

        try {
            const response = await api.post('/user/register', newUser);

            if(response.status === 201|| response.status === 200 ){
                setShowSuccess(true);

                setTimeout(() => {
                    setUser(newUser);
                    navigate('/dashboard');
                },2000);
            }

        } catch (error) {
            console.log("Erreur lors de l'inscription : ", error.response?.data);
            alert(error.response?.data?.message || "Une erreur est survenue");
        }

        console.log("Données du register :", newUser)
    }


    return (
        <div className="auth-container">
            {showSuccess && (
                <div className='success-popup' >
                    <div className='popup-content' >
                        <h3> Inscription réussi !</h3>
                        <p>Bienvenue {username}, redirection vers votre dashboard ...  </p>
                    </div>
                </div>
            )}
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        value={image_profil}
                        onChange={(e) => setImage_profil(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="auth-btn">S'inscrire</button>
                </form>

            </div>
        </div>
    );
}

export default RegisterForm;