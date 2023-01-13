import React from 'react';
import singer from '../../../images/Company/singer.jpg'
import walton from '../../../images/Company/walton.jpg'
import estern from '../../../images/Company/Eastern-Housing.jpg'
import './Company.css'

const Company = () => {
    return (
        <div id="companies" className='container'>

            <h2 className='text-center custom-margin'>Companies</h2>
            <div className='row align-items-center g-5'>

                <div className='col-lg-4 col-md-12 col-12 custom-img'>
                    <img src={singer} width="200px" height="200px" alt="" />
                </div>

                <div className='col-lg-4 col-md-12 col-12 custom-img'>
                    <img src={walton} width="200px" height="200px" alt="" />
                </div>

                <div className='col-lg-4 col-md-12 col-12 custom-img'>
                    <img src={estern} width="200px" height="200px" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Company;