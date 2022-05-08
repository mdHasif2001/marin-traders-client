import React from 'react';
import sheep from '../../../images/Banner/sheep.jpg'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sheep} height='400px' className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;