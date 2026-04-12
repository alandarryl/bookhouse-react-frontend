

import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer' >
            <div className='container footer-container' >
                <div className='first-row' >
                    <div className='col' > BOOKHOUSE </div>
                    <div className='col' >
                        <div className='col' >
                            <Link>Mentions Legales</Link>
                            <Link>Contact</Link>
                        </div>
                        <div className='col' >
                            <Link>Politique de confidentialités</Link>
                        </div>
                    </div>
                </div>
                <p className='mb' >&copy; 2026 BOOKHOUSE, Tous droits réservés à Jonathan OKANA  </p>
            </div>
        </footer>
    )
}

export default Footer;
