import React from 'react';
import SingleWorldNews from './SingleWorldNews';
import useWorldNews from '../../../hooks/useWorldNews';

const WorldNews = () => {
    const [WorldNews] = useWorldNews()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>World News</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>World News</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        WorldNews.map(WorldNews => <SingleWorldNews
                            key={WorldNews.id}
                            WorldNews={WorldNews}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default WorldNews;