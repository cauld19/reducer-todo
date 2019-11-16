import React from 'react';


const Todo = ({todo, id, removeTodo}) => {


        return (
            <div 
                // onClick={() => props.toggleCompleted(props.todo.id)}
                // className={`todo${props.todo.completed ? " completed" : ""}`}
            >
                <li className="todo-task-name">{todo}</li>
                <button onClick={()=> removeTodo(id)}>Remove</button>
          </div>
          
        );
}

export default Todo;