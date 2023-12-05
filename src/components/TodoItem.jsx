import CrossIcon from "./icons/IconCross";
import PropTypes from "prop-types";
import IconCheck from "./icons/IconCheck";
const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
    const { id, text, completed } = todo;
    return (
        <article className="flex gap-4  border-b border-b-gray-400 ">
            <button
                className={`rounded-full border-2  h-5 w-5 ${
                    completed &&
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                }`}
                onClick={() => updateTodo(id)}
            >
               {completed && <IconCheck />}
            </button>

            <p className={` ${completed && "line-through"} text-gray-600 grow `}>{text}</p>
            <button onClick={() => deleteTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};
TodoItem.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
};
export default TodoItem;
