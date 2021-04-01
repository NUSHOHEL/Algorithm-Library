import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [order, setOrder]=useState([])
    useEffect(()=>{
            fetch('http://localhost:8080/userorders')
            .then(res=>res.json())
            .then(data=>setOrder(data[0]))

    },[])
    return (
        <div>
            <h1>you orderd {order.bookName}</h1>
        </div>
    );
};

export default Orders;