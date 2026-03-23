import BookCard from './BookCard';

function RecentBooks({ books }) {
    const recent = [...books]
    .sort((a, b) => new Date(b.date_publication) - new Date(a.date_publication))
    .slice(0, 5);

    return (
        <section className="py-5">
        <h2 className="text-center">Livres récents</h2>
        <div className="d-flex justify-content-center gap-4 mt-4">
            {recent.map((book) => (
            <BookCard key={book._id} book={book} />
            ))}
        </div>
        </section>
    );
}

export default RecentBooks;