

import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className='container text-center' >
                <div className='row' >
                    <div className='col' > BOOKHOUSE </div>
                    <div className='col' >
                        <ul>
                            <li>Mentions Legales</li>
                            <li>Contact</li>
                        </ul>
                        <div className='col' >
                            <Link>Politique de confidentialités</Link>
                        </div>
                    </div>
                </div>
                <p>&copy; 2026 BOOKHOUSE, Tous droits réservés à Jonathan OKANA  </p>
            </div>
        </footer>
    )
}

export default Footer
