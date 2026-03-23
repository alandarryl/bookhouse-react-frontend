const categories = [
    "Roman",
    "Comics et manga",
    "Jeunesse",
    "Guide pratique",
    "Littérature",
    "Poésie",
    "Science-fiction",
    "Fantasy"
];

function Categories() {
    return (
        <section className="py-5 bg-light">
        <div className="container">
            <h2>Explorez les catégories</h2>
            <div className="row mt-4">
            {categories.map((cat, i) => (
                <div className="col-6 col-md-3" key={i}>
                <div className="border text-center p-3 rounded">
                    {cat}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

export default Categories;