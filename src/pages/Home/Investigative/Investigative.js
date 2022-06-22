import React from 'react';
import useInvestigative from '../../../hooks/useInvestigative';
import SingleInvestigative from './SingleInvestigative';

const Investigative = () => {
    const [Investigative] = useInvestigative()
    return (
        <section className='py-5'>
            <div className='container'>
                <div className=" text-start">
                    <p className='text-black'>Investigative</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}>Investigative</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        Investigative.map(Investigative => <SingleInvestigative
                            key={Investigative.id}
                            Investigative={Investigative}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Investigative;