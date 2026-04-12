import React from 'react';
import "./styles/sidebar.css";

const FilterSidebar = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="sidebar-overlay" onClick={onClose}>
            <div className="sidebar-container" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="sidebar-header">
                    <h3>Filtres</h3>
                    <button className="close-icon" onClick={onClose}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="sidebar-content">
                    {/* Section Prix */}
                    <div className="filter-group">
                        <label className="group-title">Prix</label>
                        <div className="price-range">
                            <div className="input-with-label">
                                <span>Min</span>
                                <input type="number" placeholder="0 €" />
                            </div>
                            <div className="price-separator"></div>
                            <div className="input-with-label">
                                <span>Max</span>
                                <input type="number" placeholder="100 €" />
                            </div>
                        </div>
                    </div>

                    {/* Section État */}
                    <div className="filter-group">
                        <label className="group-title">État du livre</label>
                        <div className="options-stack">
                            {["Neuf", "Très bon état", "Bon état", "État satisfaisant"].map((etat) => (
                                <label key={etat} className="custom-checkbox">
                                    <input type="radio" name="etat" />
                                    <span className="checkmark"></span>
                                    {etat}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Section Langue */}
                    <div className="filter-group">
                        <label className="group-title">Langue</label>
                        <select className="modern-select">
                            <option value="">Toutes les langues</option>
                            <option value="fr">Français</option>
                            <option value="en">Anglais</option>
                            <option value="es">Espagnol</option>
                        </select>
                    </div>

                    {/* Section Catégories */}
                    <div className="filter-group">
                        <label className="group-title">Catégories populaires</label>
                        <div className="category-tags">
                            {["Roman", "Manga", "Thriller", "Jeunesse", "Poésie", "Histoire"].map(cat => (
                                <button key={cat} className="tag-btn">{cat}</button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer avec boutons d'action */}
                <div className="sidebar-footer">
                    <button className="btn-reset">Réinitialiser</button>
                    <button className="btn-apply">Appliquer les filtres</button>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;