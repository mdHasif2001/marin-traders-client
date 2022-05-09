import React from 'react';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';


const AddInventory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    const handleBtn = () => {
        <Loading></Loading>
    }


    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Please add Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />

                
                <input type="submit" value="Add Inventory" onClick={() => handleBtn()} className='btn btn-custom' />
                
            </form>
            
        </div>
    );
};

export default AddInventory;