import React from 'react';
import DashboardBooks from './DashboardBooks';

function Annonces() {
    return (
        <>

        <DashboardBooks/>

        <div className="section-container">
            <div className="section-header-flex">
                <h2>Mes Livres en ligne</h2>
            </div>

            <div className="books-grid-layout">
                {/* Exemple d'une carte de livre */}
                <div className="book-item-card">
                    <div className="book-cover-placeholder">📖</div>
                    <div className="book-card-details">
                        <h4>Harry Potter à l'école des sorciers</h4>
                        <p className="book-author">J.K. Rowling</p>
                        <span className="book-price-tag">8.50 €</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Annonces;