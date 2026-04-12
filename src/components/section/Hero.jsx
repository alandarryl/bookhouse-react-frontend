// src/components/sections/Hero.js
import { Link } from "react-router-dom";

import "./styles/hero.css";

import game from "../../assets/game.jpg";
import lies from "../../assets/lies.jpg";
import love from "../../assets/love.jpg";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="first-column">
                        <h1 className="display-5 fw-bold">Redécouvrez des <span className="text-muted">trésors littéraires</span></h1>
                        <p className="lead">Achetez ou vendez des livres d’occasion en quelques clics.</p>
                        <Link to="/post-ad" className="btn btn-dark">Publiez une annonce</Link>
                    </div>
                    <div className="second-column">
                        {/* Ici tu peux mettre tes images statiques */}
                        <div className="rounded" >
                            <img src={game} alt="game book"  />
                        </div>
                        <div className="rounded" >
                            <img src={lies} alt="lie book"  />
                        </div>
                        <div className="rounded" >
                            <img src={love} alt="love book"  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;