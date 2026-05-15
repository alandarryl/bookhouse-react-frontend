import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import "./styles/dashboard.css";

function UserProfile() {
    // Pour l'instant, on simule l'utilisateur. 
    // Plus tard, on récupérera ces infos depuis le Backend.
    const user = {
        username: "Utilisateur Test",
        email: "test@example.com",
        profilePicture: "https://via.placeholder.com/150"
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            
            <main className="dashboard-content">
                <div className="profile-header">
                    <h1>Tableau de bord</h1>
                    <p>Bienvenue sur votre espace personnel</p>
                </div>

                <div className="profile-card">
                    <img src={user.profilePicture} alt="Profil" className="profile-img" />
                    <div className="profile-info">
                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                        <button className="edit-btn">Modifier le profil</button>
                    </div>
                </div>

                {/* Ici tu pourras rajouter les sections futures */}
                <div className="dashboard-stats">
                    <div className="stat-box">
                        <h4>0</h4>
                        <p>Livres postés</p>
                    </div>
                    <div className="stat-box">
                        <h4>0</h4>
                        <p>Favoris</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default UserProfile;