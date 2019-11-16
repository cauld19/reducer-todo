import React from 'react';


const Todo = ({todo, id, removeTodo, toggleTodo, todoCompleted}) => {


        return (
            <div 
                onClick={() => toggleTodo(id)}
                className={`todo${todoCompleted ? " completed" : null}`}
            >
                <li className="todo-task-name">{todo}</li>
                <button onClick={()=> removeTodo(id)}>Remove</button>
          </div>
          
          
        );
}

export default Todo;