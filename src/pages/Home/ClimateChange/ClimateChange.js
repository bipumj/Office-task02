import React from 'react';
import useClimateChange from '../../../hooks/useClimateChange';
import SingleClimateChange from './SingleClimatechange';

const Climatechange = () => {
    const [ClimateChange] = useClimateChange
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>ClimateChange</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>ClimateChange</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        ClimateChange.map(ClimateChange => <SingleClimateChange
                            key={ClimateChange.id}
                            ClimateChange={ClimateChange}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Climatechange;