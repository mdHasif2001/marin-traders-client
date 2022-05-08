import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Inventory.css'

const Inventory = ({ service }) => {
    const { id, name, img, description, price, quantity, supplierName } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4 shadow border-0 p-3'>
            <img src={img} height="400px" className='w-100' alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name: {supplierName}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-custom d-block mx-auto'>Checkout</button>
        </div>
    );
};

export default Inventory;