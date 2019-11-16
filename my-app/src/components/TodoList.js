import React from "react"

import Todo from "./Todo"

const TodoList = ({state, removeTodo, toggleTodo, clearTodo}) => {
    return (<>
        <div className="todo-outer-div">
            {state.todos.map(todo =>(
                <Todo 
                  key={todo.id}
                  todoCompleted={todo.completed}
                  todo={todo.item}
                  id={todo.id}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  clearTodo={clearTodo}
                />
            ))}
            
        </div> 
        
        </>
      );
}

export default TodoList

