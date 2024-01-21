import React, {useEffect, useState} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";

function Posts(props) {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
                console.log(data)
                setPosts(data);
            } catch (e) {
                console.error(e);
            }
        })()
    }, []);

    return (
        <div className="home">
            <ol>
                {
                    posts ? posts.map(elem => (
                        <li key={elem.id}>
                            <NavLink to={`/post/${elem.id}`}> {elem.title}</NavLink>
                        </li>

                    )) : null
                }
            </ol>
        </div>
    );
}

export default Posts;