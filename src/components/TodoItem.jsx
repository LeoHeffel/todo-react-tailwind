import CrossIcon from "./icons/IconCross";
import PropTypes from "prop-types";
import IconCheck from "./icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(({ todo, deleteTodo, updateTodo,...props }, ref) => {
    const { id, text, completed } = todo;
    return (
        <article {...props} ref={ref} className="flex gap-4  border-b border-b-gray-400  dark:bg-gray-800">
            <button
                className={`rounded-full border-2  h-5 w-5 ${
                    completed &&
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                }`}
                onClick={() => updateTodo(id)}
            >
               {completed && <IconCheck />}
            </button>

            <p className={` ${completed && "line-through"} text-gray-600 grow dark:text-gray-400`}>{text}</p>
            <button onClick={() => deleteTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
})
TodoItem.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
};
TodoItem.displayName = "TodoItem";
export default TodoItem;
