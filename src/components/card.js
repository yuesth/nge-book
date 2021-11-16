import { Button, Modal } from 'antd'
import React from 'react'

const Card = ({ book, setselectedbook, setmodal }) => {
    return (
        <div className="card text-center shadow-2xl mx-2 my-2">
            <figure className="md:px-10 pt-5 md:pt-10 h-64">
                <img src={book.book_image} className="rounded-xl object-contain max-h-48 md:h-64" />
            </figure>
            <div className="card-body">
                <div className=" h-52">
                    <h2 className="card-title">{book.title}</h2>
                    <p className="font-thin italic">{book.author}</p>
                    <p>{book.description === "" ? "-" : book.description}</p>
                </div>
                <div className="justify-center card-actions">
                    {/* <button className="btn btn-outline btn-accent">Detail</button> */}
                    <Button type="primary" size="large" onClick={() => { setmodal(true); setselectedbook(book) }}>Detail</Button>
                </div>
            </div>
        </div>
    )
}

export default Card
