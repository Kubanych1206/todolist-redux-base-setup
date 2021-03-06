import { Todo } from "../Todo";
 
//View
export const TodoList = ({todos, toggleTodo}) => (
    <ul>
     {console.log(todos)}
        {todos.map(todo => (
            <Todo key={todo.id} 
                  {...todo}
                  onClick={() => toggleTodo(todo.id)}  
            />
        ))}
    </ul>
)