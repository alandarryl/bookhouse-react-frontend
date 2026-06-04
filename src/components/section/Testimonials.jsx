import "./styles/testimonials.css";

const testimonialsData = [
    {
        id: 1,
        name: "Sarah L.",
        role: "Étudiante en Lettres",
        comment: "Une pépite ! J'ai pu revendre mes manuels de l'année dernière en 2 clics et m'acheter l'intégrale de Harry Potter d'occasion pour trois fois rien. L'interface est super fluide.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
        id: 2,
        name: "Thomas D.",
        role: "Collectionneur de Mangas",
        comment: "Trouver des tomes de One Piece en parfait état à ce prix-là, c'est presque du vol ! Le système de recherche par code postal m'a permis de récupérer mon livre à 5 minutes de chez moi.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
        id: 3,
        name: "Amélie R.",
        role: "Grande Lectrice",
        comment: "J'avais peur de l'état des livres d'occasion, mais les descriptions et les photos des vendeurs sont ultra-fiables. BOOKHOUSE est devenu mon site favori pour vider ma bibliothèque !",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    }
];

function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <span className="badge-modern">Avis de la communauté</span>
                    <h2>Ils adorent BOOKHOUSE</h2>
                    <p>Découvrez pourquoi des milliers de lecteurs nous font confiance pour donner une seconde vie à leurs livres.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((review) => (
                        <div key={review.id} className="testimonial-card">
                            <div className="card-top">
                                <div className="stars">
                                    {"★".repeat(review.rating)}
                                </div>
                                <span className="verified-badge">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                    Achat vérifié
                                </span>
                            </div>
                            
                            <p className="comment">"{review.comment}"</p>
                            
                            <div className="user-profile">
                                <img src={review.avatar} alt={review.name} className="user-avatar" />
                                <div className="user-info">
                                    <h4 className="user-name">{review.name}</h4>
                                    <span className="user-role">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;