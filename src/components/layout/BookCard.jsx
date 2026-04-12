// src/components/ads/BookCard.js
const BookCard = ({ ad, horizontal = false }) => {
    if (horizontal) {
        return (
        <div className="bg-light border rounded d-flex align-items-center p-3 mb-3" style={{ height: '120px' }}>
            <div className="flex-shrink-0" style={{ width: '80px', height: '100%' }}>
            <img 
                src={ad.image} 
                className="h-100 w-100 rounded" 
                alt={ad.title} 
                style={{ objectFit: 'cover' }} />
            </div>
            <div className="ms-3 text-start">
            <div className="fw-bold">{ad.title}</div>
            <div className="small text-muted">{ad.author}</div>
            <div className="fw-bold text-primary">{ad.price} €</div>
            </div>
        </div>
        );
    }

    return (
        <div className="text-center p-2">
        <img src={ad.image} className="rounded mb-2" alt={ad.title} style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
        <div className="fw-bold">{ad.title}</div>
        <div className="small text-muted">{ad.author}</div>
        <div className="fw-bold">{ad.price} €</div>
        {ad.views && <div className="text-muted small">Vue {ad.views} fois</div>}
        </div>
    );
};

export default BookCard;