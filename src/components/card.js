import React from 'react'

const Card = ({ book }) => {
    return (
        <div className="card text-center shadow-2xl mx-2 my-2">
            <figure className="md:px-10 pt-5 md:pt-10">
                <img src={book.book_image} className="rounded-xl object-contain max-h-48 md:max-h-64" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.display_name}</h2>
                <p>{book.description}</p>
                <div className="justify-center card-actions">
                    <button className="btn btn-outline btn-accent">Detail</button>
                </div>
            </div>
        </div>
    )
}

export default Card
