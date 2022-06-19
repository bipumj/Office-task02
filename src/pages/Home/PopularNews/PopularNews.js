import React from 'react';
import usePopularNews from '../../../hooks/usePopularNews';
import SinglePopularNews from './SinglePopularNews';

const PopularNews = () => {
    const [PopularNews] = usePopularNews();
    return (
        <section className='py-5'>
            <div className="container">
                <div className="text-start">
                    <p>Popular News</p>
                    <hr />
                    <h2>Popular News</h2>
                </div>
                <div className='row g-3 pt-4'>
                    {
                        PopularNews.map(PopularNews => <SinglePopularNews
                            key={PopularNews.id}
                            PopularNews={PopularNews}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularNews;