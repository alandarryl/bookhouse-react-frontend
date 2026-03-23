

import BookCard from './BookCard';

function BestOffers({ books }) {
    const best = [...books]
    .sort((a, b) => a.prix - b.prix)
    .slice(0, 4);

    return (
        <section className="py-5 text-center">
        <h2>Meilleures offres</h2>
        <div className="d-flex justify-content-center gap-4 mt-4">
            {best.map((book) => (
            <BookCard key={book._id} book={book} />
            ))}
        </div>
        </section>
    );
}

export default BestOffers;
