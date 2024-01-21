import React, {useEffect, useState} from 'react';
import NavMenu from "../components/NavMenu";
import axios from "axios";

function Home(props) {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        (async () => {
            console.log('home')

            try {
                const {data} = await axios.get('https://raw.githubusercontent.com/anahitGhost/share/main/menu.json');
                const categories = data.map(elem => elem.category);
                setCategory(['all', ...new Set(categories)]);
            } catch (e) {
                console.error(e);
            }
        })()

    }, []);

    return (
        <div className="home">
            <div className="container">
                <h1>Our Menu</h1>
                <div className="devider"></div>
                {
                    category ?
                        <NavMenu menuItem={category}/>
                        : null
                }
            </div>
        </div>
    );
}

export default Home;