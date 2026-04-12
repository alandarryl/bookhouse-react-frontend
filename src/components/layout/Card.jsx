// src/components/ads/BookCard.js


const Card = ({image, titre, auteur, prix}) => {
    return (
        <div className='offer-card-mini'>
            <div className='img-left'>
                <img src={image} alt={titre} />
            </div>
            <div className='text-right'>
                <h3 className='book-title'>{titre}</h3>
                <p className='book-author'>{auteur}</p>
                <span className='book-price'>{prix}</span>
            </div>
        </div>
    )
};

export default Card;