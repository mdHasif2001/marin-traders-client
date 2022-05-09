import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {

    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);

    return (
        <div>
        <div className='g-3 col-sm-12 col-md-6 col-lg-4 shadow border-0 p-3 d-block mx-auto'>
            <img src={inventory.img} height="400px" className='w-100' alt="" />
            <h2>{inventory.name}</h2>
            <p>Price: {inventory.price}</p>
            <p>Quantity: {inventory.quantity}</p>
            <p>Supplier Name: {inventory.supplierName}</p>
            <p><small>{inventory.description}</small></p>
        </div>       
        </div>
    );
};

export default InventoryDetail;