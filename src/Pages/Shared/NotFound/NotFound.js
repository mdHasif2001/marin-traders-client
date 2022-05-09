import React from 'react';
import './NotFound.css';
import img from '../../../images/logos/3828541.jpg'

const NotFound = () => {
    return (
        <div>
           <img className="notfound-img d-block mx-auto" src={img} alt="" />
        </div>
    );
};

export default NotFound;