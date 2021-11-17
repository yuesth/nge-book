import { Button } from 'antd'
import React from 'react'

const Card = ({ book, setselectedbook, setmodal }) => {
    return (
        <div className="card text-center shadow-2xl mx-2 my-2">
            <div className="flex justify-end mb-3">
                {book.status === "List" &&
                <div className="border-none bg-green-200 text-green-700 rounded-md p-2 w-20 font-semibold">List</div>
                }
                {book.status === "Read" &&
                <div className="border-none bg-blue-200 text-blue-700 rounded-md p-2 w-20 font-semibold">Read</div>
                }
                {book.status === "Finished" &&
                <div className="border-none bg-red-200 text-red-700 rounded-md p-2 w-20 font-semibold">Finished</div>
                }
            </div>
            <figure className="md:px-10 pt-5 md:pt-10 h-64">
                <img src={book.book_image} alt="" className="rounded-xl object-contain max-h-48 md:h-64" />
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
