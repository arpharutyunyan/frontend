import React from 'react';
import facebook from '../assets/images/icons/facebook.png';
import twitter from '../assets/images/icons/twitter.png';
import linkedin from '../assets/images/icons/linkedin.png';
import instagram from '../assets/images/icons/instagram.png';
import youtube from '../assets/images/icons/youtube.png';

function Footer() {
    return (
        <>
            <div className="footer__top">
                <div className="container">
                    <form action="#">
                        <input type="email" name="email" placeholder="Enter your email"/>
                        <button type="submit">subscribe Now</button>
                    </form>
                    <p className="year">2019</p>
                    <h2 className="footer__title">Free Multipurpose Responsive Landing Page </h2>
                    <div className="footer__social">
                        <a href="#" className="social__link">
                            <img src={facebook} alt=" " className="social__icon"/>
                        </a>
                        <a href="#" className="social__link">
                            <img src={twitter} alt=" " className="social__icon"/>
                        </a>
                        <a href="#" className="social__link">
                            <img src={linkedin} alt=" " className="social__icon"/>
                        </a>
                        <a href="#" className="social__link">
                            <img src={instagram} alt=" " className="social__icon"/>
                        </a>
                        <a href="#" className="social__link">
                            <img src={youtube} alt=" " className="social__icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    &copy; 2019 All Rights Reserved. Design by Free Html Templates
                </div>
            </div>
        </>
    );
}

export default Footer;