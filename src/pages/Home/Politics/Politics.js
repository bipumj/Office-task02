import React from 'react';
import usePolitics from '../../../hooks/usePolitics';
import SinglePolitics from './SinglePolitics';

const Politics = () => {
    const [Politics] = usePolitics()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Politics</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Politics</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        Politics.map(Politics => <SinglePolitics
                            key={Politics.id}
                            Politics={Politics}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Politics;