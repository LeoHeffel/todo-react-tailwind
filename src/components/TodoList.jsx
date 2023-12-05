import CrossIcon from "./icons/CrossIcon";

const TodoList = () => {
    return (
        <div className="bg-white rounded-t-md  [&>article]:p-4 mt-8">
            <article className="flex gap-4  border-b border-b-gray-400 ">
                <button className="inline-block rounded-full border-2  h-5 w-5 "></button>
                <p className="text-gray-600 grow">
                    complete online javascript course
                </p>
                <button>
                    <CrossIcon />
                </button>
            </article>
            <article className="flex gap-4  border-b border-b-gray-400">
                <button className="inline-block rounded-full border-2  h-5 w-5 "></button>
                <p className="text-gray-600 grow">
                    complete online javascript course
                </p>
                <button>
                    <CrossIcon />
                </button>
            </article>
        </div>
    );
};
export default TodoList;
