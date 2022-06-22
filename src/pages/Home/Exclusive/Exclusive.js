import React from 'react';
import useExclusive from '../../../hooks/useExclusive';
import SingleExclusive from './SingleExclusive';

const Exclusive = () => {
    const [exclusive] = useExclusive()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Exclusive</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Exclusive</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        exclusive.map(exclusive => <SingleExclusive
                            key={exclusive.id}
                            exclusive={exclusive}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Exclusive;