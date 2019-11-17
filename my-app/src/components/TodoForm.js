import React from "react";


const TodoForm = ({handleChange, handleSubmit, clearTodo, todo}) => {


    

        return (
            <div>
                <form className="todo-form" onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="todo"
                        value={todo}
                    />
                    <button>Add Todo</button> 
                </form>
                <button onClick={clearTodo}>Clear Todos</button>
            </div>
                
        )

}

export default TodoForm;