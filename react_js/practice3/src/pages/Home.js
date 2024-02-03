import React, {useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAlbums, getData, getPhotos, getTodos} from "../store/actions";
import Select from "react-select";

function Home(props) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const albums = useSelector(state => state.albums);
    const photos = useSelector(state => state.photos);
    const todos = useSelector(state => state.todos);

    const options = useMemo(() => {
        return [
            {value: 'albums', label: 'albums'},
            {value: 'photos', label: 'photos'},
            {value: 'todos', label: 'todos'}
        ]
    }, []);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    const getRequest = useCallback((v, id) => {
        switch (v) {
            case 'todos':
                return dispatch(getTodos(id));
            case 'albums':
                return dispatch(getAlbums(id));
            case 'photos':
                return dispatch(getPhotos(id));
            default:
                return null;
        }
    }, [dispatch]);



    const handleSelectChange = useCallback((value, id) => {
        getRequest(value.value, id);
    }, [getRequest]);

    return (
        <div className="home">
            {
                data.length ?

                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(elem => (
                                <tr key={elem.id}>
                                    <td>{elem.id}</td>
                                    <td>{elem.name}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.phone}</td>
                                    <td>
                                        <Select
                                            onChange={(value) => handleSelectChange(value, elem.id)}
                                            options={options}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    : null
            }
            {
                albums.length ?
                    <>
                        <h1>Albums</h1>
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>User Id</th>
                                <th>Title</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                albums.map(elem => (
                                    <tr key={elem.id}>
                                        <td>{elem.id}</td>
                                        <td>{elem.userId}</td>
                                        <td>{elem.title}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </>

                    : null
            }
            {
                photos.length ?
                    <>
                        <h1>Photos</h1>
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Image</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                photos.map(elem => (
                                        <tr key={elem.id}>
                                            <td>{elem.id}</td>
                                            <td>{elem.title}</td>
                                            <td><img src={elem.url} alt=""/></td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>
                        </table>
                    </>

                    :
                    null

            }
            {
                todos.length ?
                    <>
                        <h1>Todos</h1>
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                todos.map(elem => (
                                        <tr key={elem.id}>
                                            <td>{elem.id}</td>
                                            <td>{elem.title}</td>
                                            <td>{elem.completed}</td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>
                        </table>
                    </>

                    :
                    null

            }
        </div>

    );
}

export default Home;