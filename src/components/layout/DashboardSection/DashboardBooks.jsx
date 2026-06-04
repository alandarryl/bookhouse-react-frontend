import { useState, useEffect } from 'react';
import api from '../../../utils/axiosConfig'; 
import './styles/dashboardBooks.css';

function DashboardBooks() {
    // Structure parfaitement alignée sur ton Mongoose bookSchema
    const [bookData, setBookData] = useState({
        titre: '',
        auteur: '',
        nb_exemplaire: 1,
        annonce_image: '',
        description: ''
    });

    const [booksList, setBooksList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ type: '', text: '' });

    // 📥 CHARGEMENT : Récupération de tous les livres depuis /api/books/All
    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await api.get('/books/All');
            setBooksList(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des livres :", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    // 🚀 ENVOI : Soumission du formulaire vers /api/books/create
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        // Validation stricte calquée sur les "required: true" de ton modèle Mongoose
        if (!bookData.titre || !bookData.auteur || !bookData.description) {
            setMessage({ type: 'error', text: 'Merci de remplir tous les champs obligatoires (Titre, Auteur, Description)' });
            return;
        }

        try {
            // Requête POST sur /api/books/create (l'instance api passe automatiquement tes cookies/tokens grâce à credentials: true)
            const response = await api.post('/books/create', bookData);
            
            if (response.status === 201 || response.status === 200) {
                setMessage({ type: 'success', text: 'Le livre a été ajouté avec succès !' });
                // Reset du formulaire
                setBookData({ titre: '', auteur: '', nb_exemplaire: 1, annonce_image: '', description: '' });
                // Rafraîchissement direct de la liste
                fetchBooks(); 
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout du livre :", error);
            const errorMsg = error.response?.data?.message || "Impossible d'ajouter le livre.";
            setMessage({ type: 'error', text: errorMsg });
        }
    };

    return (
        <div className="db-books-wrapper">
            {/* FORMULAIRE D'AJOUT */}
            <div className="db-card form-container">
                <h3>Ajouter un nouveau livre</h3>
                <p className="subtitle">Remplissez les détails pour l'ajouter à la plateforme.</p>

                {message.text && (
                    <div className={`alert-message ${message.type}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="modern-form">
                    <div className="form-group">
                        <label>Titre du livre *</label>
                        <input type="text" name="titre" value={bookData.titre} onChange={handleChange} placeholder="Ex: One Piece - Tome 100" />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Auteur *</label>
                            <input type="text" name="auteur" value={bookData.auteur} onChange={handleChange} placeholder="Ex: Eiichiro Oda" />
                        </div>
                        <div className="form-group">
                            <label>Nombre d'exemplaires</label>
                            <input type="number" name="nb_exemplaire" value={bookData.nb_exemplaire} onChange={handleChange} placeholder="1" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>URL de l'image de couverture</label>
                        <input type="text" name="annonce_image" value={bookData.annonce_image} onChange={handleChange} placeholder="https://lien-de-l-image.jpg" />
                    </div>

                    <div className="form-group">
                        <label>Description / État du livre *</label>
                        <textarea name="description" rows="3" value={bookData.description} onChange={handleChange} placeholder="Ex: Très bon état, coins légèrement écornés..."></textarea>
                    </div>

                    <button type="submit" className="btn-primary-db">Ajouter à la base</button>
                </form>
            </div>

            {/* LISTING DE CONTRÔLE */}
            <div className="db-card list-container">
                <h3>Livres en Base de Données ({booksList.length})</h3>
                <p className="subtitle">Aperçu en temps réel de ton stock global.</p>

                {loading ? (
                    <div className="db-loader">Chargement des données...</div>
                ) : booksList.length === 0 ? (
                    <div className="empty-db">Aucun livre trouvé dans la base de données.</div>
                ) : (
                    <div className="db-books-grid">
                        {booksList.map((book) => (
                            <div key={book._id || book.id} className="db-book-mini-card">
                                <div className="db-book-img">
                                    <img src={book.annonce_image || 'https://via.placeholder.com/150x200?text=No+Cover'} alt={book.titre} />
                                </div>
                                <div className="db-book-details">
                                    <h4>{book.titre}</h4>
                                    <p className="author">{book.auteur}</p>
                                    <p className="quantity">Stock : {book.nb_exemplaire || 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashboardBooks;