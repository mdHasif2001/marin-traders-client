import React from 'react';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Inventories from '../Inventories/Inventories';
import Progress from '../Progress/Progress';
import './Home.css';

const Home = () => {
    return (
        <div className='home-custom'>
            <Banner></Banner>
            <Inventories></Inventories>
            <Progress></Progress>
            <Company></Company>
        </div>
    );
};

export default Home;