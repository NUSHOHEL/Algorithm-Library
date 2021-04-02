import React, { useEffect, useState } from 'react';
import "./ManageBook.css"

const ManageBook = () => {
    const [books, setbooks] = useState([])
    console.log(books);
    useEffect(() => {
        fetch('https://rhubarb-crisp-91077.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    const deleteBook = (id) => {
        console.log(id)
        fetch(`https://rhubarb-crisp-91077.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted success');
            })
    }
    const editBook=(id)=>{
        console.log(id)
        fetch(`https://rhubarb-crisp-91077.herokuapp.com/books/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
        })
            

    }

    return (
        <div>
            <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Book</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        books.map(book => <tbody>
                            <th scope="row">{book.bookName}</th>
                            <td>{book.author} </td>
                            <td>{book.price} </td>
                            <td><button onClick={()=>editBook(book._id)}>Edit</button>
                            <button onClick={() => deleteBook(book._id)}>
                                Delete
                            </button>
                            
                            </td>
                        </tbody>)
                    }
                </table>
            </div>
                      
        </div>
    );
};

export default ManageBook;