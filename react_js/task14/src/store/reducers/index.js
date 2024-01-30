const initialState = {
    inputValue: '',
    todoListItem: [],
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_INPUT_VALUE': {
            return {
                ...state,
                inputValue: action.payload.inputValue
            }
        }
        case 'SET_TODO_List': {
            return {
                ...state,
                todoListItem: action.payload.todoListItem
            }
        }
        default: {
            return {...state};
        }
    }
}