import React from 'react';
import useEconomics from '../../../hooks/useEconomics';
import SingleEconomics from './SingleEconomics';

const Economics = () => {
    const [economics] = useEconomics()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Economics</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Economics</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        economics.map(economics => <SingleEconomics
                            key={economics.id}
                            economics={economics}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Economics;