const TodoFilter = () => {
    return (
        <section className="container mx-auto  mt-8 ">
            <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                <h2 className="text-blue-600">All</h2>
                <h2 className="hover:text-blue-600">Active</h2>
                <h2 className="hover:text-blue-600">Completed</h2>
            </div>
        </section>
    );
};
export default TodoFilter;