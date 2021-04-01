import React, { useEffect, useState } from 'react';
import "./ManageBook.css"

const ManageBook = () => {
    const [books, setbooks] = useState([])
    console.log(books);
    useEffect(() => {
        fetch('http://localhost:8080/books')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    const deleteBook = (id) => {
        console.log(id)
        fetch(`http://localhost:8080/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted success');
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
                            <td><button>Edit</button>
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