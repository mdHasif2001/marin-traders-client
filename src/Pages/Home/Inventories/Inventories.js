import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, [])

    return (
        <div id="services" className='container'>
            <h1 className='text-dark text-center mt-5'>Inventory</h1>
            <div className="row">
                {
                    inventories.map(service => <Inventory key={service.id}
                        service={service}
                    >
                    </Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;


