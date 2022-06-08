import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner 1.jpg'
import banner2 from '../../../images/banner/banner 2.jpg'
import banner4 from '../../../images/banner/banner 4.png'
import './Banner.css'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner1}
                    alt="First slide"
                />
                {/* <Carousel.Caption className='p-5 shadow-lg rounded-4'>
                    <h3>NEGOTIATION TRAINING</h3>
                    <p>The Power of Nice</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner2}
                    alt="Second slide"
                />

                {/* <Carousel.Caption className='p-5 shadow-lg rounded-4'>
                    <h3>CORPORATE SALES TRAINING</h3>
                    <p>Sales Optimization: Tools, Habits, Process for Greater Sales Success</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner4}
                    alt="Third slide"
                />

                {/* <Carousel.Caption className='p-5 shadow-lg rounded-4'>
                    <h3>INFLUENCE & PERSUASION TRAINING</h3>
                    <p>Influence Without Authority™</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;