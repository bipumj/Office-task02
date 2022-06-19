import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom';


const SingleBreaking = ({ breaking }) => {
    const { img, name, time, price, location } = breaking

    // const navigate = useNavigate()
    // const handleBreaking = () => {
    //     navigate('/checkout/' + id)
    // }
    return (
        <div className='col-md-3'>
            {/* card start */}
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-center border-0 text-md-start'>
                        <Card.Title className='' style={{ color: "#39364F" }}>{name}</Card.Title>
                        <Card.Text className='mb-0' style={{ color: "#D84628" }} >{time}</Card.Text>
                        <p style={{ color: "#737287" }}>{location}</p>
                        {/* <p className='mb-3' style={{ color: "#737287" }}>{price}</p> */}

                    </Card.Body>
                    {/* <Card.Footer className='bg-primary'>
                        <button onClick={handleBreaking} className="w-100 btn btn-primary">Buy Now</button>
                    </Card.Footer> */}
                </Card>
            </CardGroup>
            {/* card end */}
        </div>
    );
};

export default SingleBreaking;