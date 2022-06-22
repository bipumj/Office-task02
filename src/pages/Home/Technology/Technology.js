import React from 'react';
import useTechnology from '../../../hooks/useTechnology';
import SingleTechnology from './SingleTechnology';

const Technology = () => {
    const [technology] = useTechnology

    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Technology</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Technology</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        technology.map(technology => <SingleTechnology
                            key={technology.id}
                            technology={technology}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Technology;