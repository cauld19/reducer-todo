import React from 'react';


const Todo = ({todo, id, removeTodo, toggleTodo, todoCompleted, completedTime}) => {


        return ( <>
            <div 
                onClick={() => toggleTodo(id)}
                className={`todo${todoCompleted ? " completed" : null}`}
            >
                <li className="todo-task-name">{todo}</li>
            </div>
            <div className="completed-todo-time">
                {todoCompleted ? `Completed Todo at: ${completedTime}`: null}
            </div>
                
            <button onClick={()=> removeTodo(id)}>Remove</button>
        </>
          
          
        );
}

export default Todo;