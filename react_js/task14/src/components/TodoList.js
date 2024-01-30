import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setToDoList} from "../store/actions";

function TodoList(props) {
    const todoListItem = useSelector((state) => state.todoListItem);
    const dispatch = useDispatch();

    const onCompleted = (id) => {
        const updatedTodos = todoListItem.map((element) => {
            if (element.id === id) {
                return {...element, isCompleted: true};
            }
            return element;
        });
        dispatch(setToDoList(updatedTodos));
    };

    const onDelete = (id) => {
        const updatedTodos = todoListItem.filter(element => element.id !== id);
        dispatch(setToDoList(updatedTodos));
    }

    return (
        todoListItem.length ?
            todoListItem.map(element => (
                <li key={element.id} data-id={element.id}>
                    <p className="index">#{element.id}</p>
                    <p className={`name ${element.isCompleted ? 'isCompleted' : ''}`}>{element.title}</p>
                    <div className="actionBtn">
                        {
                            !element.isCompleted ?
                                <button onClick={() => onCompleted(element.id)}>Done</button>
                                : null
                        }
                        <button onClick={() => onDelete(element.id)}>Delete</button>
                    </div>
                </li>
            ))
            : null
    );
}

export default TodoList;
