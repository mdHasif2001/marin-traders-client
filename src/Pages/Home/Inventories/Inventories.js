import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInventory from '../../ManageInventory/ManageInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://marin-traders-server.up.railway.app/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return (
        <div id="inventories" className='container'>
            <h2 className='text-dark text-center mt-5 mb-5'>Inventory</h2>
            <div className="row">
                {
                    inventories.map(myInventory => <Inventory key={myInventory._id}
                        myInventory={myInventory}
                    >
                    </Inventory>)
                }
            </div>
        </div>
    );
};


export default Inventories;


