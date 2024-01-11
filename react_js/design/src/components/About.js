import React from 'react';
import about from '../assets/images/about.png';
import {Button} from "@mui/material";

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <h3 className="section__title">about web elements</h3>
                <p className="section__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                </p>
                <img src={about} alt=" " className="about__img"/>
                <p className="section__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit
                </p>
                <Button variant="contained" color="secondary">Read More</Button>
            </div>
        </section>
    );
}

export default About;