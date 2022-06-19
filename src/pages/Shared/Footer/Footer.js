// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className='py-5 mt-5 ' style={{ backgroundColor: "#1E0A3C" }}>

//             <div className="container">
//                 <h3 className='fs-5 text-center mb-0 text-white'>&copy; {new Date().getUTCFullYear()} Thepostman24 || All Rights Reserved </h3>
//             </div>

//         </footer>
//     );
// };

// export default Footer;



import React from "react"
import "./Footer.css"
import img from '../../../../src/images/tech-logo-footer.png'
import img4 from '../../../../src/images/hero/hero4.jpg'
import img3 from '../../../../src/images/hero/hero3.jpg'
import img2 from '../../../../src/images/hero/hero2.jpg'
import img1 from '../../../../src/images/hero/hero1.jpg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='box logo'>
                        <img src={img} alt='' />
                        <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
                        <i className='fa fa-envelope'></i>
                        <span> hello@theposman24.com </span> <br />
                        <i className='fa fa-headphones'></i>
                        <span> +088 12345678</span>
                    </div>
                    <div className='box'>
                        <h3>World News</h3>
                        <div className='item'>
                            <img src={img1} alt='' />
                            <p>Google To Boost Android Security In Few Days</p>
                        </div>
                        <div className='item'>
                            <img src={img2} alt='' />
                            <p>Cespedes play the winning Baseball Game</p>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Current News</h3>
                        <div className='item'>
                            <img src={img3} alt='' />
                            <p>US Promises to give Intel aid to locate the soldiers</p>
                        </div>
                        <div className='item'>
                            <img src={img4} alt='' />
                            <p>Renewable energy dead as industry waits for Policy</p>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>LABELS</h3>
                        {/*<i className='fa fa-chevron-right'></i>*/}
                        <ul>
                            <li>
                                <span>Boxing</span> <label>(5)</label>
                            </li>
                            <li>
                                <span>Fashion</span> <label>(6)</label>
                            </li>
                            <li>
                                <span>Health</span> <label>(7)</label>
                            </li>
                            <li>
                                <span>Nature</span> <label>(9)</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal  '>
                <div className='container flexSB'>
                    <p>© all rights reserved || Thepostman24</p>
                    <p>
                        made with <i className='fa fa-heart'></i> by Bipu mj
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
