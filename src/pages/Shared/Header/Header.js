import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import '../Header/Header.css'

const Header = () => {
    return (
        <header>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="main-navbar ">
                    <Container fluid>
                        <Navbar.Brand as={Link} to={'/'} className='text-white fw-bold fs-6'>North Bangla Foundation</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Close
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                                    <Nav.Link as={CustomLink} to={'/'} className='fw-semibold'>Home</Nav.Link>
                                    <Nav.Link as={CustomLink} to={'/breaking'} >Breaking</Nav.Link>
                                    <Nav.Link as={CustomLink} to={'/sponsorship-content'}>Sponsorship content</Nav.Link>
                                    <Nav.Link as={CustomLink} to={'/branded-content'}>Branded content</Nav.Link>
                                    <Nav.Link as={CustomLink} to={'/ai-generate-content'}>AI generate content</Nav.Link>
                                    <Nav.Link as={CustomLink} to={'/video'}>Video</Nav.Link>
                                    <Nav.Link as={CustomLink} to={'/photo'}>Photos</Nav.Link>
                                    <Nav.Link as={CustomLink} to={'/payment'}>Payment</Nav.Link>
                                    <NavDropdown
                                        title="More" className='more-navbar'
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <div style={{ 'background- color': '#2F6276' }}>
                                            <NavDropdown.Item as={CustomLink} to={'/login'}>LogIn</NavDropdown.Item>
                                            <NavDropdown.Item as={CustomLink} to={'/signup'}>
                                                SignUp
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item as={CustomLink} to={'/setting'}>
                                                Setting
                                            </NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                </Nav>
                                {/* <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </header>
    );
};

export default Header;


















// import React from 'react';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import CustomLink from '../CustomLink/CustomLink';
// import './Header.css'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from './../../../firebase.init';
// import { signOut } from 'firebase/auth';

// const Header = () => {
//     const [user] = useAuthState(auth)
//     const handleSignOut = () => {
//         signOut(auth)
//     }
//     return (
//         <header>
//             <div className="container-fluid">
//                 <Navbar expand="lg" >
//                     <Container>
//                         <Navbar.Brand as={Link} to={'/'} className='fw-bold fs-4 text-black' style={{ color: "#1E0A3C" }}>Thepostman24</Navbar.Brand>
//                         <input type="Search" className='form-control' style={{ height: "40px", width: "350px" }} placeholder="Search.." />
//                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <Nav className="ms-auto">
//                                 <Nav.Link as={CustomLink} to={'/'} className='me-3 '>Home</Nav.Link>
//                                 <Nav.Link as={CustomLink} to={'/browse-events'} className='me-3 '>Browse Events</Nav.Link>
//                                 <Nav.Link as={CustomLink} to={'/organize'} className=' me-3'>Organize</Nav.Link>
//                                 <Nav.Link as={CustomLink} to={'/help'} className='me-3 '>Help</Nav.Link>
//                                 {user?.uid ?
//                                     <Nav.Link as={Link} to={'#'} className='' onClick={handleSignOut}>Sign Out </Nav.Link>
//                                     :
//                                     <Nav.Link as={CustomLink} to={'/login'} className=''>Login</Nav.Link>
//                                 }

//                             </Nav>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//             </div>
//         </header>
//     );
// };

// export default Header;
