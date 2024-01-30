import React from 'react';

import TodoList from "../components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {setInputValue, setToDoList} from "../store/actions";
import _ from "lodash";

function Home(props) {
    const inputValue = useSelector((state) => state.inputValue);
    const todoListItem = useSelector((state) => state.todoListItem);
    const dispatch = useDispatch();

    const handleAddItem = (event) => {    // usecallback ?
        event.preventDefault();
        if (inputValue.trim()) {
            const newItem = {
                id: _.uniqueId(),
                title: inputValue.trim(),
                isCompleted: false
            };
            dispatch(setToDoList([...todoListItem, newItem]));
            dispatch(setInputValue(''));
        }
    };

    return (
        <div className='container'>
            <h3>To do list</h3>
            <form>
                <input type="text"
                       value={inputValue}
                       onChange={(event) => dispatch(setInputValue(event.target.value))}
                />
                <button onClick={(event) => handleAddItem(event)}>Add item</button>
            </form>
            <ul className='todoList'>
                <TodoList/>
            </ul>
        </div>
    );
}

export default Home;