const ToDoCreate = () => {
    return (
        <form className="flex items-center bg-white rounded-md overflow-hidden py-4 px-4 gap-4 ">
        <span className="rounded-full border-2  h-5 w-5 inline-block "></span>
        <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
        />
    </form>
    );
};
export default ToDoCreate