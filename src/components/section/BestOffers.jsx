

import { Link } from 'react-router-dom';

//import image
import one_piece from "../../assets/onepiece.jpg";
import petit_prince from "../../assets/petit-prince.jpg";
import kaiju from "../../assets/kaiju-n8-tome-14-5633783.jpg";
import harry from "../../assets/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-337687.jpg";
import apothicaire from "../../assets/apothicaire.jpg";

import "./styles/bestOffer.css";

import Card from '../layout/Card';

function BestOffers() {
    return (
        <section className="bestoffer-section">
            <div className='bestoffer-container'>
                <h2 className='section-title'>Meilleures offres</h2>
                
                <div className='offers-grid'>
                    {/* Colonne de gauche : Livre principal */}
                    <div className='left-col'>
                        <Link to="/detail" className='main-offer-link'>
                            <div className='main-img-container'>
                                <img src={one_piece} alt="One Piece" />
                            </div>
                        </Link>
                    </div>

                    {/* Colonne de droite : Liste mini cartes */}
                    <div className='right-col'>
                        <Card image={petit_prince} titre="Le Petit Prince" auteur="St-Exupéry" prix="10€" />
                        <Card image={apothicaire} titre="L'Apothicaire" auteur="Natsu Hyuuga" prix="8€" />
                        <Card image={harry} titre="Harry Potter" auteur="J.K Rowling" prix="15€" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BestOffers;
