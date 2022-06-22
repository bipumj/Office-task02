import React from 'react';
import useAsia from '../../../hooks/useAsia';
import SingleAsia from './SingleAsia'

const Asia = () => {
    const [asia] = useAsia()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Asia</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Asia</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        asia.map(asia => <SingleAsia
                            key={asia.id}
                            asia={asia}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Asia;