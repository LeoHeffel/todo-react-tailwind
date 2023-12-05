import PropTypes from "prop-types";
import { useState } from "react";

const ToDoCreate = ({ createTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.elements[0].value;
        if(text.trim() === "") return setText("");
        createTodo(text);
        setText("");
    };

    return (
        <form
            className="flex items-center bg-white rounded-md overflow-hidden py-4 px-4 gap-4 "
            onSubmit={handleSubmit}
        >
            <span className="rounded-full border-2  h-5 w-5 inline-block "></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
        </form>
    );
};
ToDoCreate.propTypes = {
    createTodo: PropTypes.func.isRequired,
};
export default ToDoCreate;
