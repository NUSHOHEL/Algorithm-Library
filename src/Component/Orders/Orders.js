import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Usercontext } from '../../App';

const Orders = () => {
    const [loggedinuser, setloggedinuser]=useContext(Usercontext);
    const [order, setOrder]=useState([])
    useEffect(()=>{
            fetch('http://localhost:8080/userorders?email='+loggedinuser.email)
            .then(res=>res.json())
            .then(data=>setOrder(data))

    },[loggedinuser.email])
    return (
        <div>
            <h1>Total Orders {order.length}</h1>
           {order.map(order=><li>{order.bookName}</li>)}
        </div>
    );
};

export default Orders;