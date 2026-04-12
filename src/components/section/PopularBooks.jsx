
import "./styles/popular.css";

//import image
import one_piece from "../../assets/onepiece.jpg";
import petit_prince from "../../assets/petit-prince.jpg";
import kaiju from "../../assets/kaiju-n8-tome-14-5633783.jpg";
import harry from "../../assets/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-337687.jpg";
import apothicaire from "../../assets/apothicaire.jpg";

import Card from "../layout/Card";
import { Link } from "react-router-dom";

function PopularBooks() {
    return (
        <section className="popular-book">
            <div className="popular-container" >
                <h2 className="text-center">Livres populaires</h2>
                <div className="row" >
                    <div className="col" >
                        <Link>
                            <div className="border-rounded" >
                                <img src={one_piece} />
                            </div>
                        </Link>
                    </div>
                    <div className="col" >
                        <Card
                            image={harry}
                            auteur={"auteur"}
                            titre={"le titre"}
                            prix={"700 euro"}
                        />
                        <Card
                            image={apothicaire}
                            auteur={"auteur"}
                            titre={"le titre"}
                            prix={"700 euro"}
                        />
                        <Card
                            image={petit_prince}
                            auteur={"auteur"}
                            titre={"le titre"}
                            prix={"700 euro"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopularBooks;

