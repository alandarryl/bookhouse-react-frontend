

import React from 'react'

function BookCard({book}) {
    return (
        <div className='text-center' >
            <img
                src={BookCard.image}
                className='rounded'
                style={{height: 250, objectFit: 'cover'}}
            />
            <div className='mt-2' >
                <div className='book-title' >{book.titre} </div>
                <div className='book-author' >{book.auteur} </div>
                <div className='book-price' >{book.prix} €</div>
            </div>
        </div>
    )
}

export default BookCard;

