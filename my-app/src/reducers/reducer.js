export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: 'false',
            id: 1
        },
        {
            item: 'Learn about reducers',
            completed: 'false',
            id: 2
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            return {
                ...state,
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
        default:
            return state;
    }
};