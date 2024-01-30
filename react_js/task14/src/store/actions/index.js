export function setInputValue(inputValue) {
    return {
        type: 'SET_INPUT_VALUE',
        payload: {inputValue}
    }
}

export function setToDoList(todoListItem) {
    return {
        type: 'SET_TODO_List',
        payload: {todoListItem}
    }
}