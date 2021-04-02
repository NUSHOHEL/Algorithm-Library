import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import "./Home.css"

const Home = () => {
    const [books, setbooks] = useState([])
    console.log(books);
    useEffect(() => {
        fetch('https://rhubarb-crisp-91077.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    return (
        <div className="bg-light">
            <div className="d-flex justify-content-center p-5">
                <div className=" input-group w-50">
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                    <div class="input-group-append">
                        <span class="input-group-text">Search</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-around mt-5">
                {
                    books.map(book => <Books book={book} ></Books>)
                }
            </div>
        </div>
    );
};

export default Home;