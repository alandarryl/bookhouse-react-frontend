
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles/sidebar.css";

import { useAuth } from "../../context/AuthContext";

function Sidebar({ currentSection, changeSection }) {
    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = () =>{
        logout();
        navigate('/Auth');
    };

    return (
        <div className="sidebar" >
            <div className="sidebar-logo" >
                <Link to="/" >
                    <h2>BOOKHOUSE</h2>
                </Link>
            </div>

            <aside className="sidebar-nav" >
                <button
                    onClick={() =>changeSection('profil')} 
                    className={`nav-item ${currentSection === 'profil' ? 'active' : '' }`}
                >
                    <span className="icon" >👤</span> Mon profil
                </button>
                <button
                    onClick={() =>changeSection('books')}  
                    className={`nav-item ${currentSection === 'books' ? 'active' : '' }`}
                >
                    <span className="icon" >📚</span> Mes Annonces
                </button> 
                <button
                    onClick={() =>changeSection('messages')}  
                    className={`nav-item ${currentSection === 'messages' ? 'active' : '' }`}
                >
                    <span className="icon" >💬</span> Discussions
                </button> 
                <button
                    onClick={() =>changeSection('favorites')}  
                    className={`nav-item ${currentSection === 'favorites' ? 'active' : '' }`}
                >
                    <span className="icon" >❤️</span> Favoris
                </button> 
            </aside>

            <button className="logout-btn" onClick={handleLogout}>
                Déconnexion
            </button>
        </div>
    )

}

export default Sidebar;
