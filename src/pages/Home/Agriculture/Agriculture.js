import React from 'react';
import useAgriculture from '../../../hooks/useAgriculture';
import SingleAgriculture from './SingleAgriculture';

const Agriculture = () => {
    const [agriculture] = useAgriculture()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Agriculture</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Agriculture</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        agriculture.map(agriculture => <SingleAgriculture
                            key={agriculture.id}
                            agriculture={agriculture}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Agriculture;