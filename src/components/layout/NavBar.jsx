
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/navbar.css";


const NavBar = () =>{

    const [Connected, setConnected] = useState(false)

    return (
        <nav>
            <div className="container" >
                <h1>
                    <Link to={"/"} >BOOKHOUSE</Link>
                </h1>
                {/* boutton d'ouvertir et fermeture des liens */}
                <button className="navbar-toggler" >
                    <span>menu</span>
                </button>
                <div className="navbar-items" >
                    {/* lien de navigation */}
                    <ul className="navbar-nav" >
                        <li className="nav-item" > <Link className='nav-link' to="/books" >Nos livres</Link> </li>
                        <li className="nav-item" > <Link className='nav-link' to="/favorites" >Favoris</Link> </li>
                        <li className="nav-item" > <Link className='nav-link' to="/contact" >Nous contacter</Link> </li>
                    </ul>
                    {/* barre de recherche */}
                    <form>
                        <input type="search" className="form-control" placeholder="Rechercher un livre" />
                        <button type="submit" className="btn btn-outline-dark" >Rechercher</button>
                    </form>
                    {Connected ? 
                        <Link className="nav-link" to={"/profile"} >Mon profil </Link> : 
                        <Link className="nav-link" to={"/login"} >Connexion</Link> }
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

