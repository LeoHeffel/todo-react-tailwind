import PropTypes from "prop-types";
const TodoFilter = ({ setFilter }) => {
    return (
        <section className="container mx-auto  mt-8 ">
            <div className="bg-white p-4 rounded-md flex justify-center gap-4 text-gray-400 dark:bg-gray-800">
                <h2 className="text-blue-600 cursor-pointer" onClick={() => setFilter("all")}>All</h2>
                <h2 className="hover:text-blue-600 cursor-pointer" onClick={() => setFilter("active")}>Active</h2>
                <h2 className="hover:text-blue-600 cursor-pointer" onClick={() => setFilter("completed")}>Completed</h2>
            </div>
        </section>
    );
};
TodoFilter.propTypes = {
    setFilter: PropTypes.func.isRequired
};
export default TodoFilter;