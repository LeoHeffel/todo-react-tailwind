import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = ({todos, deleteTodo,updateTodo}) => {
    return (
        <div className="bg-white rounded-t-md  [&>article]:p-4 mt-8 ">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            ))}
           
        </div>
    );
};
TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,  
    updateTodo: PropTypes.func.isRequired
};
export default TodoList;
