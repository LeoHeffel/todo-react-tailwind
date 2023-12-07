import PropTypes from 'prop-types';
const TodoComputed = ({left,clearCompleted}) => {
    return (
        <section className="py-4 px-4 justify-between rounded-b-md flex bg-white  dark:bg-gray-800">
            <span className="text-gray-400 ">{left} items left</span>
            <button className="text-gray-400 " onClick={clearCompleted}>Clear completed</button>
        </section>
    );
};
TodoComputed.propTypes = {
    left: PropTypes.number,
    clearCompleted: PropTypes.func
}
export default TodoComputed