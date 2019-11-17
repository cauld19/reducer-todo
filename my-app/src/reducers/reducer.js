import moment from 'moment';

export const initialState = {
    todos: [
        {
            item: 'Check for spelling errors',
            completed: false,
            id: 1,
            completedTime: ""
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
                        completed: false,
                        completedTime: ""
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
                                completed: !todo.completed,
                                completedTime: moment(new Date()).format("YYYY-MM-DD, h:mm:ss a")
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