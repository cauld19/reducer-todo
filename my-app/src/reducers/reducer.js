export const initialState = {
    todos: [
        {
            item: 'Check for spelling errors',
            completed: false,
            id: 1
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            return {
                todos: [
                    {
                        item: action.payload,
                        id: Date.now(),
                        completed: false
                    },
                    ...state.todos
                ]
            };

        case "REMOVE_TODO":
                return {
                    ...state,
                    todos: state.todos.filter(item => item.id !== action.payload)
                };

        case "TOGGLE_TODO":
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        if (todo.id === action.payload) {
                            return {
                                ...todo,
                                completed: !todo.completed
                            }
                        }
                        return todo;
                    }
                )};
                
        case "CLEAR_TODOS": 
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
                
        default:
            return state;
    }
};