import React from 'react';
import quote from '../assets/images/icons/quote.png';

function Feedback() {
    return (
        <section className="feedback">
            <div className="container">
                <h3 className="section__title">What is say clients</h3>
                <p className="section__desc">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
                    ut labore et dolore magna aliq
                </p>
                <p className="clients__feedback-name">Consectetur adipiscing </p>
                <blockquote className="clients__feedback">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                </blockquote>
                <img src={quote} alt=" " className="clients__feedback-quote"/>
            </div>
        </section>
    );
}

export default Feedback;