import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import "./AddBook.css"

const AddBook = ({ data }) => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null);


    const uploadImage = e => {
        const imageData = new FormData();
        imageData.set('key', 'ec5df63c40b68c2c294edde73f94d744');
        imageData.append('image', e.target.files[0])

        axios.post
            ('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onSubmit = data => {
        if (image === null) {
            console.log("your image isn't ready yet");
        }
        else {
            const eventData = {
                author: data.Author,
                price: data.Price,
                bookName: data.Book,
                image: image
            }
            const url = `https://rhubarb-crisp-91077.herokuapp.com/addBooks`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
                .then(res => console.log('server side response ', res))
        }
    }

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mt-3 p-4 bg-light addBookForm " >
                    <div className="col-md-6 mb-3">
                        <input className="form-control" placeholder="Book Name" name="Book" ref={register} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input className="form-control" placeholder="Author Name" name="Author" ref={register} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input className="form-control" placeholder="Book Price" name="Price" ref={register} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="file" onChange={uploadImage} />
                    </div>
                </div>
                <div className="d-flex mt-3 justify-content-end">
                <input className="btn btn-primary" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddBook;