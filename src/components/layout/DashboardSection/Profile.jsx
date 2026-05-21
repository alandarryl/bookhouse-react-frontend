import React from 'react'

function Profile({user, DefaultUser}) {
    return (
        <div>
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
        </div>
    )
}

export default Profile;