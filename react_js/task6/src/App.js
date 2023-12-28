import './assets/css/style.css';
import {useEffect, useState} from "react";
import UsersList from "./components/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsersList(data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    console.log(usersList);

    return (

        <div className="App">
            <h1>Users List</h1>
            <UsersList usersList={usersList}/>
        </div>
    );
}

export default App;
