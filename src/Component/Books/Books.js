import React from 'react';
import { Link } from 'react-router-dom';
import "./Book.css"

const Books = ({ book }) => {
    console.log(book)
    return (
        <div className="col-sm-12  col-lg-4">
            <div className="card design bg-dark text-light ">
                <img src={book.image} className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{book.bookName}</h5>
                    <p className="card-text"><small>{book.author} </small> </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h3>${book.price}</h3>
                   <Link to={`/cart/${book._id}`}> <button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Books;