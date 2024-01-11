import React from 'react';
import {Button} from "@mui/material";

function Home() {
    return (
        <section className="home" id="home">
            <h1 className="home__title">Web eLements Templates</h1>
            <p className="home__desc">Free Multipurpose Responsive <br/> Landing Page</p>
            <Button variant="contained" color="secondary">Read More</Button>
            <div className="home__layer-bottom"></div>
        </section>
    )
}

export default Home;