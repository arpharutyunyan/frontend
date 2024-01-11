import React from 'react';
import website from '../assets/images/website.png';
import application from '../assets/images/application.png';
import design from '../assets/images/design.png';

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <h3 className="section__title">SERVICES</h3>
                <p className="section__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    <br/> ut labore et dolore magna aliq
                </p>
                <article className="article__block">
                    <img src={website} alt=" " className="article__block__img"/>
                    <h4 className="article__block__title">website element</h4>
                    <p className="article__block__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliq
                    </p>
                </article>
                <article className="article__block">
                    <img src={application} alt=" " className="article__block__img"/>
                    <h4 className="article__block__title">applicatinos element</h4>
                    <p className="article__block__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliq
                    </p>
                </article>
                <article className="article__block">
                    <img src={design} alt=" " className="article__block__img"/>
                    <h4 className="article__block__title">design element</h4>
                    <p className="article__block__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliq
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Services;