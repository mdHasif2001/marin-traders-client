import React from 'react';

const Progress = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center mt-2 mb-5 '>Progress</h2>
            <div className="row container ms-3">
                
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