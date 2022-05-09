import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getmyItems = async () => {
            const email = user?.email;
            const url = `https://glacial-falls-06935.herokuapp.com/myItem?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getmyItems();

    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders: {myItems.length}</h2>
        {
            myItems.map(myItem => <div
                key={myItem._id}
            >
                <p>{myItem.email} : {myItem.service}</p>
            </div>)
        }
        </div>
    );
};

export default MyItem;