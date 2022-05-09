import React from 'react';
import singer from '../../../images/Company/singer.jpg'
import walton from '../../../images/Company/walton.jpg'
import estern from '../../../images/Company/Eastern-Housing.jpg'

const Company = () => {
    return (
        <div id="companies" className='container'>
                    <div className='row container my-5'>
            <h2 className='text-center'>Companies</h2>

            <div className='col-lg-4 col-md-12 col-12 g-5'>
                <img src={singer} width="400px" height="400px" alt="" />
            </div>

            <div className='col-lg-4 col-md-12 col-12 g-5'>
                <img src={walton} width="400px" height="400px" alt="" />
            </div>

            <div className='col-lg-4 col-md-12 col-12 g-5'>
                <img src={estern} width="400px" height="400px" alt="" />
            </div>


        </div>

        </div>
    );
};

export default Company;