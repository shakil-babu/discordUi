import React from 'react'
import './Footer.css';
import flag from '../../../src/images/flag.png';
import logo from '../../images/logo.png';
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaLinkedin} from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className='footer__area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className='footer__title'>Your place to talk</h1>
                        <div className="d-flex">
                            <img className='mr-3' style={{width:'35px'}} src={flag} alt="flag"/> English, USA
                        </div>
                        <div className="d-flex icons">
                            <FaTwitterSquare className='icon-item t' />
                            <FaFacebookSquare className='icon-item f' />
                            <FaInstagramSquare className='icon-item in' />
                            <FaLinkedin className='icon-item l' />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row footer__list justify-content-between">
                            <div className="col-md-2  footer__list__item ">
                                <p>Product</p>
                                <a href="">Dowenload</a>
                                <a href="">Why Discord</a>
                                <a href="">Inspiration</a>
                                <a href="">Collage</a>
                                <a href="">Nitro</a>
                                <a href="">Status</a>
                            </div>
                            <div className="col-md-2 footer__list__item ">
                                <p>Company</p>
                                <a href="">About</a>
                                <a href="">Jobs</a>
                                <a href="">Branding</a>
                                <a href="">Newsroom</a>
                                <a href="">Store</a>
                            </div>
                            <div className="col-md-2 footer__list__item ">
                                <p>Resourses</p>
                                <a href="">Support</a>
                                <a href="">Safety</a>
                                <a href="">Blog</a>
                                <a href="">Feedback</a>
                                <a href="">Partnars</a>
                                <a href="">Verifications</a>
                                <a href="">Developers</a>
                                <a href="">Stream Kit</a>
                                <a href="">Open Source</a>
                                <a href="">Security</a>
                                <a href="">Moderation</a>
                            </div>
                            <div className="col-md-2 footer__list__item ">
                                <p>Policies</p>
                                <a href="">Terms</a>
                                <a href="">Privacy</a>
                                <a href="">Guidlines</a>
                                <a href="">Acknowledgement</a>
                                <a href="">License</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="underline"></div>
                <div className="d-flex justify-content-between">
                    <img style={{width:'140px'}} src={logo} alt="logo "/>
                    <a className='signup-btn' href="">Sign up</a>
                </div>
            </div>            
        </footer>
    )
}

export default Footer
