import React from 'react';
import Slider from 'react-slick';
import { lifestyle } from '../../../../src/dummyData';

const CurrentNews = () => {

    const settings = {
        // dots: false,
        // infinite: true,
        // speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true

    }
    return (
        <>
            <section className='popularPost Life'>
                <div className="text-start">
                    <p>Current News</p>
                    <hr />
                    <h2>Current News</h2>
                </div>
                <div className="content">
                    <Slider {...settings}>
                        {lifestyle.map((val) => {
                            return (
                                <div className='items'>
                                    <div className='box shadow'>
                                        <div className='images'>
                                            <div className='img'>
                                                <img src={val.cover} alt='' />
                                            </div>
                                            <div class='category category1'>
                                                <span>{val.category}</span>
                                            </div>
                                        </div>
                                        <div className='text'>
                                            <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                                            <div className='date'>
                                                <i class='fas fa-calendar-days'></i>
                                                <label>{val.date}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </Slider>
                </div>
            </section>

        </>
    );
};

export default CurrentNews;