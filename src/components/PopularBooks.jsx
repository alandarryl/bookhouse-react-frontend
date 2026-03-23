

import BookCard from './BookCard';

function PopularBooks({ books }) {
    const popular = [...books]
    .sort((a, b) => b.nombre_vue - a.nombre_vue)
    .slice(0, 5);

    return (
        <section className="py-5 bg-light">
        <h2 className="text-center">Livres populaires</h2>
        <div className="d-flex justify-content-center gap-4 mt-4">
            {popular.map((book) => (
            <BookCard key={book._id} book={book} />
            ))}
        </div>
        </section>
    );
}

export default PopularBooks;

