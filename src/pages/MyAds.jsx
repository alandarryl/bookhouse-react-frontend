import React, { useState } from 'react';
import "./styles/userAds.css";

const MOCK_ADS = [
    { id: 1, titre: "L'Étranger", prix: 12, statut: "disponible", image: "https://picsum.photos/200/300?random=1" },
    { id: 2, titre: "1984 - George Orwell", prix: 15, statut: "vendu", image: "https://picsum.photos/200/300?random=2" },
    { id: 3, titre: "Le Petit Prince", prix: 10, statut: "en attente", image: "https://picsum.photos/200/300?random=3" },
    { id: 4, titre: "Fondation", prix: 25, statut: "disponible", image: "https://picsum.photos/200/300?random=4" },
];

function MyAds() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("tous");

    return (
        <div className="dashboard-wrapper">
            {/* SIDEBAR NAVIGATION */}
            <aside className="user-sidebar">
                <div className="profile-section">
                    <div className="avatar-wrapper">
                        <img src="https://i.pravatar.cc/150?u=vendeur" alt="Profil" />
                    </div>
                    <h4>Jean Dupont</h4>
                    <p>Membre depuis 03/2026</p>
                </div>
                <nav className="sidebar-nav">
                    <a href="#"><i className="bi bi-grid-1x2-fill"></i> Tableau de bord</a>
                    <a href="#" className="active"><i className="bi bi-book-half"></i> Mes annonces</a>
                    <a href="#"><i className="bi bi-person-fill"></i> Mon profil</a>
                    <div className="nav-separator"></div>
                    <a href="#" className="logout-link"><i className="bi bi-box-arrow-right"></i> Déconnexion</a>
                </nav>
            </aside>

            {/* MAIN CONTENT */}
            <main className="ads-main-content">
                <header className="content-header">
                    <h1>Mes annonces <span>({MOCK_ADS.length})</span></h1>
                    <button className="btn-add-ad"><i className="bi bi-plus-lg"></i> Publier un livre</button>
                </header>

                {/* FILTERS & SEARCH */}
                <section className="controls-section">
                    <div className="search-bar">
                        <i className="bi bi-search"></i>
                        <input 
                            type="text" 
                            placeholder="Rechercher dans mes livres..." 
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="filter-pills">
                        <button className={filter === "tous" ? "active" : ""} onClick={() => setFilter("tous")}>Tous</button>
                        <button className={filter === "disponible" ? "active" : ""} onClick={() => setFilter("disponible")}>Disponibles</button>
                        <button className={filter === "vendu" ? "active" : ""} onClick={() => setFilter("vendu")}>Vendus</button>
                    </div>
                </section>

                {/* ADS GRID */}
                <div className="ads-grid">
                    {MOCK_ADS.map((ad) => (
                        <div className="ad-card" key={ad.id}>
                            <div className={`status-badge ${ad.statut}`}>{ad.statut}</div>
                            <div className="ad-image">
                                <img src={ad.image} alt={ad.titre} />
                            </div>
                            <div className="ad-details">
                                <h3>{ad.titre}</h3>
                                <p className="ad-price">{ad.prix} €</p>
                                <div className="ad-actions">
                                    <button className="btn-icon edit" title="Modifier"><i className="bi bi-pencil-square"></i></button>
                                    <button className="btn-icon delete" title="Supprimer"><i className="bi bi-trash3"></i></button>
                                    <button className="btn-view-stats" title="Stats"><i className="bi bi-graph-up"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default MyAds;