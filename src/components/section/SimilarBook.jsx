import React from 'react';
import { Link } from 'react-router-dom';

// Un petit composant interne pour chaque carte de livre similaire
const SimilarBookCard = ({ image, titre, prix, id }) => (
    <div className="similar-card">
        <div className="similar-img-container">
            <img src={image} alt={titre} />
        </div>
        <div className="similar-info">
            <h4>{titre}</h4>
            <p className="price">{prix}€</p>
            <Link to={`/detail/${id}`} className="btn-view">Détails</Link>
        </div>
    </div>
);

const SimilarBooks = ({ books }) => {
    return (
        <section className="similar-books-section">
            <div className="container">
                <h3 className="section-title">Livres Similaires</h3>
                <div className="similar-grid">
                    {books.map((book) => (
                        <SimilarBookCard key={book.id} {...book} />
                    ))}
                </div>
                <div className="view-more-container">
                    <button className="btn-more">Voir plus de livres</button>
                </div>
            </div>
        </section>
    );
};

export default SimilarBooks;