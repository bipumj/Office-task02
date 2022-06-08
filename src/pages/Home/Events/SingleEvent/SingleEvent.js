import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom';


const SingleEvent = ({ event }) => {
    const { img, name, time, price, location } = event

    // const navigate = useNavigate()
    // const handleEvent = () => {
    //     navigate('/checkout/' + id)
    // }
    return (
        <div className='col-md-3'>
            {/* card start */}
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-center border-0 text-md-start'>
                        <Card.Title className='mb-2' style={{ color: "#39364F" }}>{name}</Card.Title>
                        <Card.Text style={{ color: "#D84628" }} >{time}</Card.Text>
                        <p style={{ color: "#737287" }}>{location}</p>
                        <p className='mb-3' style={{ color: "#737287" }}>{price}</p>

                    </Card.Body>
                    {/* <Card.Footer className='bg-primary'>
                        <button onClick={handleEvent} className="w-100 btn btn-primary">Buy Now</button>
                    </Card.Footer> */}
                </Card>
            </CardGroup>
            {/* card end */}
        </div>
    );
};

export default SingleEvent;