import { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://marin-traders-server.up.railway.app/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);
    return [inventories, setInventories]


}

export default useInventory;