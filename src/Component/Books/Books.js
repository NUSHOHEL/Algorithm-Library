import React from 'react';
import { Link } from 'react-router-dom';
import "./Book.css"

const Books = ({ book }) => {
    console.log(book)
    return (
            <div className="card design p-2 mb-5">
                <img src={book.image} className="card-img-top" alt="..." />
                <div className="p-2">
                    <h5 className="card-title">{book.bookName}</h5>
                    <p className="card-text"><small>{book.author} </small> </p>
                </div>
                <div className="d-flex justify-content-between p-2">
                    <h3>${book.price}</h3>
                   <Link to={`/cart/${book._id}`}> <button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
    );
};

export default Books;