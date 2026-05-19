

import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import "./styles/footer.css";

function Footer() {

    const location = useLocation();

    if (location.pathname.startsWith("/dashboard")) return null;

    return (
        <footer className='footer' >
            <div className='footer-container' >
                <div className='first-row' >
                    <div className='col' > BOOKHOUSE </div>
                    <div className='footer-links-wrapper' >
                        <div className='link-column' >
                            <Link>Mentions Legales</Link>
                            <Link>Contact</Link>
                        </div>
                        <div className='link-column' >
                            <Link to={"/privacy"} >Politique de confidentialités</Link>
                            <Link to="/cgu">CGU</Link>
                        </div>
                    </div>
                </div>
                <p className='mb' >
                    &copy; 2026 BOOKHOUSE, Tous droits réservés à Jonathan OKANA  
                </p>
            </div>
        </footer>
    )
}

export default Footer;
