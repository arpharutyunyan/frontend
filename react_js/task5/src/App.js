import React, {useCallback, useState} from 'react';
import AddForm from "./components/AddForm";
import _ from "lodash";
import TodoList from "./components/TodoList";

function App() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = useCallback((event) => {
        setInputValue(event.target.value);
    }, [inputValue]);

    const handleAddItem = useCallback((event) => {
        event.preventDefault();

        if (inputValue.trim()) {
            const newItem = {
                id: _.uniqueId(),
                title: inputValue.trim(),
                isCompleted: false
            };

            setTodos([...todos, newItem]);
            setInputValue('');
        }
    }, [todos, inputValue]);

    const handleDelete = useCallback((id) => {

        const updatedTodos = todos.filter(element => element.id !== id);
        setTodos(updatedTodos);

    }, [todos]);

    const handleMakeCompleted = useCallback((id) => {

        const updatedTodos = todos.map((element) => {
            if (element.id === id) {
                element.isCompleted = true;
            }
            return element;
        });
        setTodos(updatedTodos);

    }, [todos]);

    return (

        <div className='container'>
            <h3>To do list</h3>
            <AddForm handleInputValue={handleInputValue} inputValue={inputValue} handleAddItem={handleAddItem}/>
            <ul className='todoList'>
                <TodoList todos={todos} onDelete={handleDelete}
                          onCompleted={handleMakeCompleted}/>
            </ul>
        </div>
    );
}

export default App;