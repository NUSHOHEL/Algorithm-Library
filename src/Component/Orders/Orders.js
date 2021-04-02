import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Usercontext } from '../../App';
import "./Orders.css"

const Orders = () => {
    const [loggedinuser, setloggedinuser] = useContext(Usercontext);
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://rhubarb-crisp-91077.herokuapp.com/userorders?email=' + loggedinuser.email)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [loggedinuser.email])
    return (
        <div className="text-center">

            <div className="border">
                <div className="text-center">
                    <h1>Total Orders {order.length}</h1>
                </div>
                <div className=" d-flex flex-wrap  justify-content-around mt-5">
                    {order.map(order => <div className="card mb-5 style bg-dark">
                        <img class="card-img-top p-3" src={order.image} alt="Card cap" />
                        <div class="text-center text-light">
                           <p>{order.bookName}</p>
                           <p>Price: ${order.price}</p>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    );
};

export default Orders;