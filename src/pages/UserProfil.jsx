import React, { useState, useEffect} from 'react';
import Sidebar from '../components/layout/Sidebar';
import "./styles/dashboard.css";
import DefaultUser from "../assets/default-profile.png";
import api from '../utils/axiosConfig.js';

// import { useAuth } from '../context/AuthContext.jsx';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // const {user} = useAuth();

    useEffect(() => {
        const fetchUserProfile =async () => {
            try {
                const response = await api.get('/user/profile');
                console.log(response);
                if(response.status === 200){
                    setUser(response.data);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération du profil : ", error);
                setError("Impossible de charger les informations du profil.");
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [] );

    if(loading){
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: '100vh'}} >
            Chargement du profile ...
        </div>
    }

    if(error){
        return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }} >
            {error}
        </div>
    }

    return (
        <div className="dashboard-layout">
            <Sidebar />
            
            <main className="dashboard-content">
                <div className="profile-header">
                    <h1>Tableau de bord</h1>
                    <p>Bienvenue sur votre espace personnel</p>
                </div>

                <div className="profile-card">
                    <img src={user?.image_profil || DefaultUser} alt="Profil" className="profile-img" />
                    <div className="profile-info">
                        <h3>{user?.username}</h3>
                        <p>{user?.email}</p>
                        <button className="edit-btn">Modifier le profil</button>
                    </div>
                </div>

                {/* Ici tu pourras rajouter les sections futures */}
                <div className="dashboard-stats">
                    <div className="stat-box">
                        <h4>{user?.booksCount || 0}</h4>
                        <p>Livres postés</p>
                    </div>
                    <div className="stat-box">
                        <h4>{user?.favoritesCount || 0}</h4>
                        <p>Favoris</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default UserProfile;