import React from 'react';
import SingleBreaking from '../SingleBreaking/SingleBreaking';
import useBreakings from '../../../../hooks/useBreakings';

const Breakings = () => {
    const [breakings] = useBreakings()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Breaking</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Breaking</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        breakings.map(breaking => <SingleBreaking
                            key={breaking.id}
                            breaking={breaking}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Breakings;