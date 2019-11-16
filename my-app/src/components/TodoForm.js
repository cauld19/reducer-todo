import React from "react";

const TodoForm = props => {
    

        return (
            <div>
                <form className="todo-form" onSubmit={props.handleSubmit}>
                    <input 
                        onChange={props.handleChange}
                        type="text"
                        name="todo"
                        value={props.todo}
                    />
                    <button>Add Todo</button> 
                </form>
            </div>
                
        )

}

export default TodoForm;