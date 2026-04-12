
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const NavBar = () =>{

    const [Connected, setConnected] = useState(false)

    return (
        <nav>
            <div className="container" >
                <Link className="navbar-brand" >BOOKHOUSE</Link>
                {/* boutton d'ouvertir et fermeture des liens */}
                <button className="navbar-toggler" >
                    <span>menu</span>
                </button>
                <div className="collapse navbar-collapse" >
                    {/* lien de navigation */}
                    <ul className="navbar-nav" >
                        <li className="nav-item" > <Link className='nav-link' to="/book" >Nos livres</Link> </li>
                        <li className="nav-item" > <Link className='nav-link' to="/book" >Favoris</Link> </li>
                        <li className="nav-item" > <Link className='nav-link' to="/book" >Nous contacter</Link> </li>
                    </ul>
                    {/* barre de recherche */}
                    <form>
                        <input type="search" className="form-control" placeholder="Rechercher un livre" />
                        <button type="submit" className="btn btn-outline-dark" ></button>
                    </form>
                    {Connected ? <Link>profil </Link>  : <Link>login</Link> }
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

