import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/navbar.css";

const NavBar = () => {
    const [connected, setConnected] = useState(false);
    // État pour le menu mobile
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <h1>
                    <Link to="/" onClick={() => setIsOpen(false)}>BOOKHOUSE</Link>
                </h1>

                {/* Le bouton "Hamburger" - visible uniquement sur mobile */}
                <button 
                    className={`navbar-toggler ${isOpen ? 'active' : ''}`} 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Ajout d'une classe dynamique 'open' si isOpen est vrai */}
                <div className={`navbar-items ${isOpen ? 'open' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item"> 
                            <Link className='nav-link' to="/books" onClick={() => setIsOpen(false)}>Nos livres</Link> 
                        </li>
                        <li className="nav-item"> 
                            <Link className='nav-link' to="/favorites" onClick={() => setIsOpen(false)}>Favoris</Link> 
                        </li>
                        <li className="nav-item"> 
                            <Link className='nav-link' to="/contact" onClick={() => setIsOpen(false)}>Contact</Link> 
                        </li>
                    </ul>

                    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="search" placeholder="Rechercher..." />
                        <button type="submit" className="btn-search">Rechercher</button>
                    </form>

                    <div className="auth-links">
                        {connected ? 
                            <Link className="nav-link" to="/profile" onClick={() => setIsOpen(false)}>Profil</Link> : 
                            <Link className="nav-link login-btn" to="/login" onClick={() => setIsOpen(false)}>Connexion</Link> 
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;