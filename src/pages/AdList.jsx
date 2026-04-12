import React, { useState } from 'react';
import './styles/ads.css';

// Données fictives pour l'affichage
const MOCK_DATA = [
    { id: 1, titre: "Le Seigneur des Anneaux", prix: 25, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400", genre: "Fantasy" },
    { id: 2, titre: "Sherlock Holmes", prix: 12, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400", genre: "Policier" },
    { id: 3, titre: "1984 - George Orwell", prix: 15, image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400", genre: "Dystopie" },
    { id: 4, titre: "Le Petit Prince", prix: 10, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400", genre: "Enfant" },
];

const AdCard = ({ ad }) => (
    <div className="book-card">
        <div className="card-media">
            <img src={ad.image} alt={ad.titre} />
            <button className="wishlist-btn"><i className="bi bi-heart"></i></button>
            <div className="genre-tag">{ad.genre}</div>
        </div>
        <div className="card-body">
            <h3>{ad.titre}</h3>
            <div className="card-footer">
                <span className="price">{ad.prix} €</span>
                <button className="view-btn">Détails</button>
            </div>
        </div>
    </div>
);

const AdList = () => {
    // État pour ouvrir/fermer la sidebar des filtres
    const [isFilterOpen, setFilterOpen] = useState(false);

    return (
        <div className="ads-page-container">
            
            {/* --- SECTION HEADER --- */}
            <div className="container">
                <header className="ads-main-header">
                    <div className="title-area">
                        <h1>Explorer les livres</h1>
                        <p>{MOCK_DATA.length} pépites à découvrir</p>
                    </div>

                    <div className="search-and-filters">
                        <div className="search-input-wrapper">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Titre, auteur, genre..." />
                        </div>
                        <button className="btn-open-filters" onClick={() => setFilterOpen(true)}>
                            <i className="bi bi-sliders"></i>
                            <span>Filtres</span>
                        </button>
                    </div>
                </header>

                {/* --- GRILLE D'ANNONCES --- */}
                <div className="ads-grid">
                    {MOCK_DATA.map((ad) => (
                        <div key={ad.id} className="book-card">
                            <div className="card-image">
                                <img src={ad.image} alt={ad.titre} />
                                <div className="badge-genre">{ad.genre}</div>
                                <button className="btn-wishlist"><i className="bi bi-heart"></i></button>
                            </div>
                            <div className="card-content">
                                <h3>{ad.titre}</h3>
                                <div className="card-bottom">
                                    <span className="price">{ad.prix} €</span>
                                    <button className="btn-details">Voir</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- PAGINATION --- */}
                <div className="pagination">
                    <button disabled><i className="bi bi-chevron-left"></i></button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>

            {/* --- SIDEBAR DE FILTRES (Overlay) --- */}
            {isFilterOpen && (
                <div className="sidebar-overlay" onClick={() => setFilterOpen(false)}>
                    <div className="sidebar-container" onClick={(e) => e.stopPropagation()}>
                        <div className="sidebar-header">
                            <h2>Filtres</h2>
                            <button className="btn-close" onClick={() => setFilterOpen(false)}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>

                        <div className="sidebar-scrollable-content">
                            {/* Prix */}
                            <div className="filter-group">
                                <label>Budget</label>
                                <div className="price-inputs">
                                    <input type="number" placeholder="Min €" />
                                    <input type="number" placeholder="Max €" />
                                </div>
                            </div>

                            {/* État */}
                            <div className="filter-group">
                                <label>État du livre</label>
                                <div className="check-options">
                                    {["Neuf", "Très bon état", "Bon état"].map(status => (
                                        <label key={status} className="radio-label">
                                            <input type="radio" name="etat" />
                                            <span>{status}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Catégories */}
                            <div className="filter-group">
                                <label>Catégories</label>
                                <div className="tags-container">
                                    {["Roman", "Manga", "Thriller", "Jeunesse", "BD", "Histoire"].map(tag => (
                                        <button key={tag} className="tag-item">{tag}</button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-footer">
                            <button className="btn-clear">Effacer</button>
                            <button className="btn-apply" onClick={() => setFilterOpen(false)}>
                                Appliquer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdList;


