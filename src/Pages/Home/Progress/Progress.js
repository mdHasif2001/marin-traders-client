import React from 'react';
import { Link } from 'react-router-dom';
import './Progress.css'

const Progress = () => {
    return (
        <div id="progress">
            <Link className='manage-section btn btn-custom my-5' to='/manage'>Mange Inventories</Link>
            <h2 className='text-center custom-margin'>Progress</h2>
            <div className="row custom-progress text-center">

                <div className="col-12 col-md-6 col-lg-3">
                    <h3>200+</h3>
                    <small className="text-center ">Clients</small>
                </div>


                <div className="col-12 col-md-6 col-lg-3">
                    <h3>1700+</h3>
                    <small className="text-center ">Shipment</small>
                </div>


                <div className="col-12 col-md-6 col-lg-3">
                    <h3>300+</h3>
                    <small className="text-center ">Items</small>
                </div>



                <div className="col-12 col-md-6 col-lg-3">
                    <h3>17+</h3>
                    <small className="text-center ">Countries</small>
                </div>

            </div>

        </div>
    );
};

export default Progress;