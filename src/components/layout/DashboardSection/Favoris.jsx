import React from 'react';

function Favoris() {
    return (
        <div className="section-container">
            <h2>Mes Livres Favoris</h2>

            <div className="books-grid-layout">
                {/* Exemple d'une carte de favori */}
                <div className="book-item-card">
                    <div className="book-cover-placeholder">📚</div>
                    <div className="book-card-details">
                        <h4>Le Seigneur des Anneaux</h4>
                        <p className="book-author">J.R.R. Tolkien</p>
                        <button className="btn-remove-fav">❤️ Retirer des favoris</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favoris;