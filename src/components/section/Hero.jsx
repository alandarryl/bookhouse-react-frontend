// src/components/sections/Hero.js
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="py-5">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-md-6">
                <h1 className="display-5 fw-bold">Redécouvrez des <span className="text-muted">trésors littéraires</span></h1>
                <p className="lead">Achetez ou vendez des livres d’occasion en quelques clics.</p>
                <Link to="/post-ad" className="btn btn-dark">Publiez une annonce</Link>
            </div>
            <div className="col-md-6 d-flex flex-wrap gap-1 justify-content-center">
                {/* Ici tu peux mettre tes images statiques */}
                <img src="/assets/twisted1.jpeg" className="rounded" style={{ width: '150px', height: '225px', objectFit: 'cover' }} alt="Hero" />
            </div>
            </div>
        </div>
        </section>
    );
};

export default Hero;