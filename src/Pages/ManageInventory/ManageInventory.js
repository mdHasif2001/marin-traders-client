import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventory();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure about that?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className='text-center'>Manage Your Inventories</h2>

            <div>
            {
                inventories.map(inventory => 
                    <div className='d-flex justify-content-center flex-wrap  p-3 m-3 shadow' key={inventory._id}>

                    <div>
                        <img src={inventory.img} height="400px" className='w-100' alt="" />
                        <h2>{inventory.name}</h2>
                        <p>Price: {inventory.price}</p>
                        <p>Quantity: {inventory.quantity}</p>
                        <p>Supplier Name: {inventory.supplierName}</p>
                        <p><small>{inventory.description}</small></p>            
                        <button className='btn btn-custom px-5' onClick={() => handleDelete(inventory._id)}>X</button>
                    </div>

            </div>
        )
            }

            </div>
            
            <Link className='manage-section btn btn-custom mb-5' to='/addInventory'>Add Items</Link>

        </div>
    );
};

export default ManageInventory;