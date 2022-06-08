import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import '././../Login/Login.css'

import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, GoogleLoading] = useSignInWithGoogle(auth);


    const [sending] = useSendPasswordResetEmail(auth);

    const [setEmail] = useState('')

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'


    if (loading || GoogleLoading) {
        return <Loading />
    }
    if (sending) {
        toast.success('Reset Email Sent')
    }
    // navigate after login
    if (user || googleUser) {
        navigate(from, { replace: true })
    }
    else if (user || googleUser) {
        navigate('/')
    }

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)


    }


    return (
        <section className='signup'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row g-0">
                            <div className="col-md-6 offset-md-3">
                                <div className="form-container pt-5">
                                    <h2 style={{ color: "#1E0A3C", fontSize: "52px" }} className='fw-bolder text-start mb-4'>Create an Account</h2>
                                    <Form onSubmit={handleLogin}>

                                        <div class="form-floating mb-3">
                                            <input onBlur={handleEmail} className='form-control' name='email' id='floatingEmail' type="email" placeholder="Enter email address" required />
                                            <label for="floatingEmail">Email address</label>
                                        </div>

                                        <div class="form-floating mb-4">
                                            <input className='form-control' name='password' type="password" placeholder="Password" required />
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <div class="form-floating mb-4">
                                            <input className='form-control' name='confirm-password' type="password" placeholder="Password" required />
                                            <label for="floatingPassword">Confirm Password</label>
                                        </div>

                                        <Button variant="warning" className='w-100 py-2' type="submit">
                                            SignUp
                                        </Button>
                                    </Form>

                                    <div className='mt-3'>
                                        <p>Have an Account <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Log in</Link> </p>
                                    </div>

                                    <div className="d-flex split-container align-items-center justify-content-center position-relative pt-3">
                                        <div class="split-container__divider-text eds-text-bm eds-text-weight--heavy">or</div>
                                    </div>

                                    <div className='text-center mt-3'>
                                        <button className='btn btn-light border-dark w-100 py-2' onClick={() => signInWithGoogle()}><FaGoogle className='me-3' /> Sign in with Google</button>
                                    </div>

                                    <div className="other-log-container mt-4">
                                        <p>Other login methods</p>
                                        <div className='d-flex mt-3'>
                                            <FaFacebookF className='facebook-icon me-5' />
                                            <FaApple className='apple-icon' />
                                        </div>
                                    </div>

                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login-right">
                            <img src="https://cdn.evbstatic.com/s3-build/perm_001/c24baa/django/images/login/lateral-image-3.jpg" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;