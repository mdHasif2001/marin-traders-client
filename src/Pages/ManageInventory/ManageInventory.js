import React from 'react';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [inventories, setinventories] = useInventory();

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
                    setinventories(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your inventories</h2>
            {
                inventories.map(inventory => <div key={inventory._id}>
                    <h5>{inventory.name} <button onClick={() => handleDelete(inventory._id)}>X</button></h5>

                </div>)
            }
        </div>
    );
};

export default ManageInventory;