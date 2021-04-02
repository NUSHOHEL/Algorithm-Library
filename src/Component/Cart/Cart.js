import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Usercontext } from '../../App';

const Cart = () => {
    const[loggedinuser, setloggedinuser]=useContext(Usercontext)
    // console.log(loggedinuser)
    const [book, setBooks] = useState([])
    const { bookID } = useParams()
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    // console.log(book);
    useEffect(() => {
        fetch(`https://rhubarb-crisp-91077.herokuapp.com/books/${bookID}`)
            .then(res => res.json())
            .then(data => setBooks(data[0]))
    }, [bookID])
    const placeOrder=()=>{
let orders= {...book, ...loggedinuser}
const neworders={...orders,date:new Date()}
console.log(neworders)

const url = `https://rhubarb-crisp-91077.herokuapp.com/saveorder`;
fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(neworders)
})
    .then(res => {
        alert('Congratulation! Your Order Have Been Placed', res)
       
    })
    history.replace(from);
   
    }
    return (
        <div className="p-5 mt-5">
            <div className="mt-5 shadow p-3 mb-5 bg-body ">
                <h1>Check Out</h1>
                <div className="border-bottom mt-5 d-flex justify-content-between">
                    <p> <strong>Description</strong></p>
                    <p><strong>Quantity</strong></p>
                    <p><strong>Price</strong></p>
                </div>
                <div className="border-bottom mt-3  d-flex justify-content-between">
                    <p>{book.bookName}</p>
                  <p> 1 </p>
                    <p>$ {book.price}</p>
                </div>
                <div className="mt-3 d-flex justify-content-between">
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