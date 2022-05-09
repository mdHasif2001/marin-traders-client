import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useInventoryDetail from "../../hooks/useInventoryDetail";
import axios from 'axios';
import { toast } from "react-toastify";
import './Delivered.css'


const Delivered = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const myItem = {
            email: user.email,
            inventory: inventory.name,
            inventoryId: inventoryId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://glacial-falls-06935.herokuapp.com/myItem', myItem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order hasbeen booked.');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto custom-form'>
            <h2 className="text-center m-3">Restock: {inventory.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={inventory.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-custom d-block mx-auto' type="submit" value="Restock the Item" />
            </form>
        </div>
    );
};

export default Delivered;