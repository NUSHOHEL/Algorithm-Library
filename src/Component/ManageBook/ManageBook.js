import React, { useEffect, useState } from 'react';
import "./ManageBook.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,  faPenSquare } from '@fortawesome/free-solid-svg-icons'

const ManageBook = () => {
    const [books, setbooks] = useState([])
    useEffect(() => {
        fetch('https://rhubarb-crisp-91077.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    const deleteBook = (id) => {
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
            <div className="table-responsive py-5">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark text-left">
                        <tr>
                            <th scope="col">Book</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        books.map(book => <tbody className="text-left">
                            <th scope="row">{book.bookName}</th>
                            <td>{book.author} </td>
                            <td>{book.price} </td>
                            <td><button onClick={()=>editBook(book._id)} className="btn btn-primary ml-2">
                                <FontAwesomeIcon icon={faPenSquare}/>
                                </button>
                            <button onClick={() => deleteBook(book._id)} className="btn btn-danger ml-2">
                            <FontAwesomeIcon icon={faTrashAlt} />
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