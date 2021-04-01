import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Usercontext } from '../../App';

const Cart = () => {
    const[loggedinuser, setloggedinuser]=useContext(Usercontext)
    // console.log(loggedinuser)
    const [book, setBooks] = useState([])
    const { bookID } = useParams()
    // console.log(book);
    useEffect(() => {
        fetch(`http://localhost:8080/books/${bookID}`)
            .then(res => res.json())
            .then(data => setBooks(data[0]))
    }, [bookID])
    const placeOrder=()=>{
let orders= {...book, ...loggedinuser}
const neworders={...orders,date:new Date()}
console.log(neworders)

const url = `http://localhost:8080/saveorder`;
fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(neworders)
})
    .then(res => console.log('server side response ', res))

    }
    return (
        <div>
            <div className="mt-5 shadow p-3 mb-5 bg-body rounded-3 ">
                <h1>Check Out</h1>
                <div className="border-bottom mt-5 d-flex justify-content-between">
                    <p> <strong>Description</strong></p>
                    <p><strong>Quantity</strong></p>
                    <p><strong>Price</strong></p>
                </div>
                <div className="border-bottom mt-3  d-flex justify-content-between">
                    <p>{book.bookName}</p>
                    <p>{book.length || 1}</p>
                    <p>$ {book.price}</p>
                </div>
                <div className="mt-3  d-flex justify-content-between">
                    <p>Total</p>
                    <p>$ {book.price} </p>
                </div>

            </div>
            <div className="d-flex justify-content-end">
                <button onClick={placeOrder} className="btn btn-primary">Check Out</button>
            </div>

        </div>

    );
};

export default Cart;