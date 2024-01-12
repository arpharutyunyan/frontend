import React, {Component} from 'react';
import Button from "./components/Button";
import _ from 'lodash';
import TodoList from "./components/TodoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputValue: ''
        }
    }

    handleInputValue = (event) => {
        this.setState({inputValue: event.target.value});
    };

    handleAddItem = (event) => {
        event.preventDefault();
        const {inputValue} = this.state;

        if (inputValue.trim()) {
            const newItem = {
                id: _.uniqueId(),
                title: inputValue.trim(),
                isCompleted: false
            };

            this.setState((prevState) => ({
                todos: [...prevState.todos, newItem],
                inputValue: ''
            }));
        }
    };

    handleDelete = (id) => {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.filter(element => element.id !== id);

            return {todos: updatedTodos};
        });
    };

    handleMakeCompleted = (id) => {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((element) => {
                if (element.id === id) {
                    element.isCompleted = true;
                }
                return element;
            });

            return {todos: updatedTodos};
        });
    };

    render() {
        return (
            <div className='container'>
                <h3>To do list</h3>
                <form>
                    <input type="text" onChange={this.handleInputValue} value={this.state.inputValue}/>
                    <Button buttonText="Add item" onClick={this.handleAddItem}/>
                </form>
                <ul className='todoList'>
                    <TodoList todos={this.state.todos} onDelete={this.handleDelete}
                              onCompleted={this.handleMakeCompleted}/>
                </ul>
            </div>
        );
    }

}

export default App;