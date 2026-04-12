
import Card from "../layout/Card";

//import image
import one_piece from "../../assets/onepiece.jpg";
import petit_prince from "../../assets/petit-prince.jpg";
import kaiju from "../../assets/kaiju-n8-tome-14-5633783.jpg";
import harry from "../../assets/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-337687.jpg";
import apothicaire from "../../assets/apothicaire.jpg";

import "./styles/recent.css";
import { Link } from "react-router-dom";

function RecentBooks() {

    return (
        <section className="py-5">
            <div className="recent-container">
    <h2 className="text-center">Livres récents</h2>
    <div className="row">
        {/* BLOC 1 : La grande image */}
        <div className="first-col">
            <Link to="/harry-potter">
                <div className="border-rounded">
                    <img src={harry} alt="Featured" />
                </div>
            </Link>
        </div>

        {/* BLOCS SUIVANTS : Les cartes directement dans la row */}
        <Card image={petit_prince} titre="Le Petit Prince" auteur="Antoine de St-Ex" prix="12€" />
        <Card image={kaiju} titre="Kaiju N°8" auteur="Naoya Matsumoto" prix="7.99€" />
        <Card image={apothicaire} titre="L'Apothicaire" auteur="Natsu Hyuuga" prix="10€" />
        <Card image={one_piece} titre="one piece" auteur="eichiro oda" prix="17€" />
        
        {/* Tu peux même en ajouter une 4ème pour remplir la grille */}
    </div>
</div>
        </section>
    );
}

export default RecentBooks;