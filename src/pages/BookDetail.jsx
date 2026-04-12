import React, { useState } from 'react';
import SimilarBooks from '../components/section/SimilarBook';
import "./styles/detail.css";

import { Link } from 'react-router-dom';

// Images mockées pour l'exemple
import harry from "../assets/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-337687.jpg"; 
import userAvatar from "../assets/default-profile.png";

function BookDetail() {
    const [activeTab, setActiveTab] = useState('description');
    const [isFavorite, setIsFavorite] = useState(false);

    // Mock des données (ce que tu recevras de l'API plus tard)
    const book = {
        titre: "Harry Potter à l'école des sorciers",
        prix: 15,
        etat: "Comme neuf",
        vues: 124,
        description: "Le jour de ses onze ans, Harry Potter, un orphelin élevé par un oncle et une tante qui le détestent, voit sa vie basculer...",
        auteur: "J.K. Rowling",
        genres: "Fantastique, Jeunesse",
        langue: "Français",
        exemplaires: 1,
        vendeur: { pseudo: "AlexBook92", membreDepuis: "12/05/2024" }
    };

    const similarData = [
        { id: 1, titre: "Le Petit Prince", prix: 10, image: harry },
        { id: 2, titre: "One Piece T.1", prix: 6, image: harry },
        { id: 3, titre: "Kaiju N°8", prix: 8, image: harry },
    ];

    return (
        <div className="detail-page">
            <div className="container">
                <div className="main-info-grid">
                    
                    {/* Galerie d'images */}
                    <div className="gallery-column">
                        <div className="main-image-wrapper">
                            <img src={harry} alt={book.titre} />
                            <button className="btn-favorite" onClick={() => setIsFavorite(!isFavorite)}>
                                <i className={isFavorite ? "bi bi-heart-fill red" : "bi bi-heart"}></i>
                            </button>
                        </div>
                    </div>

                    {/* Informations d'achat */}
                    <div className="info-column">
                        <div className="header-detail">
                            <span className="badge-category">Roman Fantastique</span>
                            <h1>{book.titre}</h1>
                            <p className="views-count"><i className="bi bi-eye"></i> {book.vues} vues</p>
                        </div>

                        <div className="price-tag">{book.prix}€</div>
                        
                        <div className="features-list">
                            <div className="feature-item"><span>État :</span> <strong>{book.etat}</strong></div>
                            <div className="feature-item"><span>Auteur :</span> <strong>{book.auteur}</strong></div>
                        </div>

                        {/* Carte Vendeur */}
                        <div className="vendeur-card">
                            <div className="vendeur-header">
                                <img src={userAvatar} alt="avatar" className="avatar" />
                                <div>
                                    <p className="vendeur-name">{book.vendeur.pseudo}</p>
                                    <p className="vendeur-date">Membre depuis {book.vendeur.membreDepuis}</p>
                                </div>
                            </div>
                            <Link to={"/messaging"} >
                                <button className="btn-contact">Contactez le vendeur</button>
                            </Link>
                        </div>

                        <button className="btn-report"><i className="bi bi-flag"></i> Signaler l'annonce</button>
                    </div>
                </div>

                {/* Section Onglets (Tabs) */}
                <div className="tabs-container">
                    <div className="tabs-header">
                        <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Description</button>
                        <button className={activeTab === 'details' ? 'active' : ''} onClick={() => setActiveTab('details')}>Détails</button>
                        <button className={activeTab === 'specs' ? 'active' : ''} onClick={() => setActiveTab('specs')}>Spécifications</button>
                    </div>
                    <div className="tabs-content">
                        {activeTab === 'description' && <p>{book.description}</p>}
                        {activeTab === 'details' && (
                            <ul>
                                <li>Auteur : {book.auteur}</li>
                                <li>Exemplaires : {book.exemplaires}</li>
                            </ul>
                        )}
                        {activeTab === 'specs' && (
                            <ul>
                                <li>Genre : {book.genres}</li>
                                <li>Langue : {book.langue}</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* Composant séparé pour les livres similaires */}
            <SimilarBooks books={similarData} />
        </div>
    );
}

export default BookDetail;