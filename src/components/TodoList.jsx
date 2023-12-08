import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { Droppable, Draggable } from "@hello-pangea/dnd";
const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                    className="bg-white dark:bg-gray-800 rounded-t-md overflow-hidden [&>article]:p-4 mt-8 "
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            draggableId={`${todo.id}`}
                            index={index}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    todo={todo}
                                    deleteTodo={deleteTodo}
                                    updateTodo={updateTodo}
                                    ref={
                                        draggableProvider.innerRef
                                    }
                                    {...draggableProvider.draggableProps}
                                    {...draggableProvider.dragHandleProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};
TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
};
export default TodoList;
