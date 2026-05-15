
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles/sidebar.css";

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () =>{
        navigate('/Auth');
    };

    return (
        <div className="sidebar" >
            <div className="sidebar-logo" >
                <h2>BOOKHOUSE</h2>
            </div>

            <aside className="sidebar-nav" >
                <Link to="/dashboard" className="nav-item active" >
                    <span className="icon" >👤</span> Mon profil
                </Link>
                <Link to="/dashboard/books" className="nav-item">
                    <span className="icon" >📚</span> Mes Annonces
                </Link> 
                <Link to="/dashboard/messages" className="nav-item">
                    <span className="icon" >💬</span> Discussions
                </Link> 
                <Link to="/dashboard/favorites" className="nav-item">
                    <span className="icon" >❤️</span> Favoris
                </Link> 
            </aside>

            <button className="logout-btn" onClick={handleLogout}>
                Déconnexion
            </button>
        </div>
    )

}

export default Sidebar;
