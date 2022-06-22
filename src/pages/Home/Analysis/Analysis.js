import React from 'react';
import useAnalysis from '../../../hooks/useAnalysis';
import SingleAnalysis from './SingleAnalysis';

const Analysis = () => {
    const [analysis] = useAnalysis()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Analysis</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Analysis</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        analysis.map(analysis => <SingleAnalysis
                            key={analysis.id}
                            analysis={analysis}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Analysis;