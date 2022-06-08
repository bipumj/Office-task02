import React from 'react';
import SingleEvent from './SingleEvent/SingleEvent';
import useEvents from './../../../hooks/useEvents'

const Events = () => {
    const [events] = useEvents()
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
                        events.map(event => <SingleEvent
                            key={event.id}
                            event={event}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Events;