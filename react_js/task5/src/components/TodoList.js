import React from 'react';
import PropTypes from "prop-types";
import Button from "./Button";

function TodoList(props) {

    const {todos, onDelete, onCompleted} = props;

    return (
        todos.map(element => (
            <li key={element.id} data-id={element.id}>
                <p className="index">#{element.id}</p>
                <p className={`name ${element.isCompleted ? 'isCompleted' : ''}`}>{element.title}</p>
                <div className="actionBtn">
                    {
                        !element.isCompleted ?
                            <Button buttonText='Done' onClick={() => onCompleted(element.id)}/>
                            : null
                    }
                    <Button buttonText='Delete' onClick={() => onDelete(element.id)}/>
                </div>
            </li>
        ))
    );
}

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onCompleted: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
    todos: [],
    onCompleted: () => {
    },
    onDelete: () => {
    },
}