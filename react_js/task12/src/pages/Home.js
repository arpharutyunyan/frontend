import React, {useCallback, useEffect, useState} from 'react';
import {useSearchParams, Link} from "react-router-dom";
import Api from "../Api";
import Modal from "react-modal";

function Home(props) {
    Modal.setAppElement('#root');

    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams({'title': ''});

    // for modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const [movieData, setMovieData] = useState(null);
    const [movieId, setMovieId] = useState('');


    useEffect(() => {
        (async () => {
            try {
                const {data} = await Api.getMovies(searchParams.get('title'));
                setMovies(data.data);
            } catch (e) {
                console.error(e);
            }
        })()
    }, [searchParams]);

    const handleChange = useCallback((e) => {
        searchParams.set('title', e.target.value);
        setSearchParams(searchParams);
    }, [searchParams, setSearchParams]);



    const openModal = (id) => {
        setIsOpen(true);
        setMovieId(id);
    };

    const closeModal = () => {
        setIsOpen(false);
        setMovieId('');
    };

    const afterOpenModal = async () => {
        try {
            const {data} = await Api.getMovie(movieId);
            setMovieData(data.data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container">
            <div className="home">
                <input name='title' type='text' onChange={handleChange} value={searchParams.get('title')}/>
                <div className="movies">
                    {movies
                        ? movies.map((elem) => (
                            <div className="movie" key={elem.id}>
                                <img src={elem.attributes.poster} alt=''/>
                                <p className="title">{elem.attributes.title}</p>
                                <p>{elem.attributes.release_date}</p>
                                <p>{elem.attributes.rating}</p>
                                <p>{elem.attributes.running_time}</p>
                                {/*<Link to={`/${elem.id}`} className="link">Read more</Link>*/}
                                <button onClick={() => openModal(elem.id)} className="link">Show movie details</button>
                            </div>
                        ))
                        : null
                    }
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    className="modal"
                >
                    {
                        movieData ?
                            <>
                                <div className="close">
                                    <button onClick={closeModal}>X</button>
                                </div>
                                <div className="movie" key={movieData.id}>
                                    <img src={movieData.attributes.poster} alt=''/>
                                    <p className="title">{movieData.attributes.title}</p>
                                    <p>{movieData.attributes.release_date}</p>
                                    <p>{movieData.attributes.rating}</p>
                                    <p>{movieData.attributes.running_time}</p>
                                </div>
                            </>
                            :
                            <div>No data</div>
                    }

                </Modal>
            </div>
        </div>
    );
}

export default Home;