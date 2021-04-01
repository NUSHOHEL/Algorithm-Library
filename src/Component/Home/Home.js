import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import "./Home.css"

const Home = () => {
    const [books, setbooks] = useState([])
    console.log(books);
    useEffect(() => {
        fetch('http://localhost:8080/books')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    return (
        <div className="bg-light w-100">
           <div className="row justify-content-around">
           {
                books.map(book => <Books book={book} ></Books> )
            }
           </div>
        </div>
    );
};

export default Home;