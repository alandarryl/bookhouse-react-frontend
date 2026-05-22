import React from 'react';

function Profile({ user, DefaultUser }) {
    // Sécurité au cas où l'API met du temps à répondre
    const username = user?.username || "Utilisateur";
    const email = user?.email || "non-renseigné@mail.com";
    const role = user?.role || "Membre";

    return (
        <div className="section-container">
            <div className="profile-header-block">
                <img 
                    src={DefaultUser} 
                    alt="Avatar de l'utilisateur" 
                    className="profile-avatar-large" 
                />
                <div>
                    <h2>{username}</h2>
                    <span className="badge-role">{role}</span>
                </div>
            </div>

            <div className="profile-form-grid">
                <div className="form-group">
                    <label>Nom d'utilisateur</label>
                    <input type="text" value={username} readOnly className="disabled-input" />
                </div>

                <div className="form-group">
                    <label>Adresse e-mail</label>
                    <input type="email" value={email} readOnly className="disabled-input" />
                </div>
            </div>
            
            <button className="btn-primary-action">Modifier mon profil</button>
        </div>
    );
}

export default Profile;