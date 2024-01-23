import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Api from "../Api";

function ShowMovie(props) {
    const [movieData, setMovieData] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await Api.getMovie(id);
                setMovieData(data.data);
            } catch (e) {
                console.error(e);
            }
        })()
    }, [id]);

    return (
        <div className="container">
            {
                movieData ?
                    <div className="movie" key={movieData.id}>
                        <img src={movieData.attributes.poster} alt=''/>
                        <p className="title">{movieData.attributes.title}</p>
                        <p>{movieData.attributes.release_date}</p>
                        <p>{movieData.attributes.rating}</p>
                        <p>{movieData.attributes.running_time}</p>
                        <Link to={`/`} className="link">Back</Link>
                    </div>

                    : null
            }
        </div>
    );
}

export default ShowMovie;