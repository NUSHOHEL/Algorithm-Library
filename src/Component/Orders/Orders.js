import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Usercontext } from '../../App';

const Orders = () => {
    const [loggedinuser, setloggedinuser] = useContext(Usercontext);
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://rhubarb-crisp-91077.herokuapp.com/userorders?email=' + loggedinuser.email)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [loggedinuser.email])
    return (
        <div className="row">

            <div className="col-md-8 border">
                <div className="text-center">
                    <h1>Total Orders {order.length}</h1>
                </div>
                <div className=" d-flex flex-wrap  justify-content-around">
                    {order.map(order => <div class="card" style={{ width: '10rem' }}>
                        <img class="card-img-top" src={order.image} alt="Card cap" />
                        <div class="text-center">
                           <p>{order.bookName}</p>
                           <p>Price: ${order.price}</p>
                        </div>
                    </div>)}
                </div>

            </div>
            <div className="col-md-4 border">

            </div>
        </div>
    );
};

export default Orders;