import "./styles/popular.css";

// Importations des images
import one_piece from "../../assets/onepiece.jpg";
import petit_prince from "../../assets/petit-prince.jpg";
import harry from "../../assets/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-337687.jpg";
import apothicaire from "../../assets/apothicaire.jpg";

import Card from "../layout/Card";
import { Link } from "react-router-dom";

function PopularBooks() {
    return (
        <section className="popular-book">
            <div className="popular-container">
                <h2 className="text-center">Livres populaires</h2>
                
                <div className="popular-row">
                    {/* Colonne de Gauche : Grande Image Principale */}
                    <div className="popular-col-left">
                        <Link to="/detail">
                            <div className="border-rounded">
                                <img src={one_piece} alt="Livre populaire principal" />
                            </div>
                        </Link>
                    </div>

                    {/* Colonne de Droite : Grille Bootstrap-style de 4 cartes */}
                    <div className="popular-col-right cards-grid">
                        <Card image={harry} auteur="J.K Rowling" titre="Harry Potter" prix="15€" />
                        <Card image={apothicaire} auteur="Natsu Hyuuga" titre="L'Apothicaire" prix="8€" />
                        <Card image={petit_prince} auteur="St-Exupéry" titre="Le Petit Prince" prix="10€" />
                        <Card image={petit_prince} auteur="St-Exupéry" titre="Le Petit Prince" prix="10€" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopularBooks;