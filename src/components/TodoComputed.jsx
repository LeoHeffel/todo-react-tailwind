import PropTypes from 'prop-types';
const TodoComputed = ({todos,clearCompleted}) => {
    return (
        <section className="py-4 px-4 justify-between rounded-b-md flex bg-white">
            <span className="text-gray-400 ">{todos.length} items left</span>
            <button className="text-gray-400 " onClick={clearCompleted}>Clear completed</button>
        </section>
    );
};
TodoComputed.propTypes = {
    todos: PropTypes.array,
    clearCompleted: PropTypes.func
}
export default TodoComputed