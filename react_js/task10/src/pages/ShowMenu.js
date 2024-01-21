import React, {useEffect, useState} from 'react';
import Home from "./Home";
import axios from "axios";
import {useParams} from "react-router-dom";

function ShowMenu(props) {
    const [menu, setMenu] = useState(null);
    const {category} = useParams();

    useEffect(() => {
        (async () => {
            console.log('showMenu')
            try {
                const {data} = await axios.get('https://raw.githubusercontent.com/anahitGhost/share/main/menu.json');
                const filteredMenu = data ? data.filter(item => item.category === category) : [];
                setMenu(filteredMenu.length > 0 ? filteredMenu : data);
            } catch (e) {
                console.error(e);
            }
        })()

    }, [category]);

    return (
        <>
            <Home/>
            <div className='container'>
                <div className="showMenu">
                    {
                        menu ? menu.map(elem => (
                            <div className="menuItem" key={elem.id}>
                                <div className="img">
                                    <img src={elem.img} alt=''/>
                                </div>
                                <div className="menuItem__desc">
                                    <div className="title">
                                        <p>{elem.title}</p>
                                        <p style={{color: '#C49D5E'}}>N{elem.price}</p>
                                    </div>
                                    <div className="desc">
                                        {elem.desc}
                                    </div>
                                </div>
                            </div>
                        )) : null
                    }
                </div>
            </div>
        </>
    );
}

export default ShowMenu;