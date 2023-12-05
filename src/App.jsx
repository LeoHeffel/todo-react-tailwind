import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
function App() {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-100">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className=" uppercase text-white text-3xl font-semibold tracking-[.3em]">
                        Todo
                    </h1>
                    <button>
                        <i className="fa-solid fa-plus"><MoonIcon fill={"white"}/></i>
                    </button>
                </div>

                <form className="flex items-center bg-white rounded-md overflow-hidden py-4 px-4 gap-4 mt-8">
                    <span className="rounded-full border-2  h-5 w-5 inline-block "></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-auto px-4 mt-8 ">
                <div className="bg-white rounded-md  [&>article]:p-4">
                    <article className="flex gap-4  border-b border-b-gray-400 ">
                        <button className="inline-block rounded-full border-2  h-5 w-5 "></button>
                        <p className="text-gray-600 grow">
                            complete online javascript course
                        </p>
                        <button >
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4  border-b border-b-gray-400">
                        <button className="inline-block rounded-full border-2  h-5 w-5 "></button>
                        <p className="text-gray-600 grow">
                            complete online javascript course
                        </p>
                        <button >
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="py-4 px-4 justify-between flex">
                        <span className="text-gray-400 ">5 items left</span>
                        <button className="text-gray-400 ">Clear completed</button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto px-4 mt-8 ">
                <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                    <h2 className="text-blue-600">All</h2>
                    <h2 className="hover:text-blue-600">Active</h2>
                    <h2 className="hover:text-blue-600">Completed</h2>
                </div>
               
            </section>

            <section className="container mx-auto px-4 text-center mt-8">
                <p>Drag and drop to reorder list</p>
            </section>
            <footer className="container mx-auto px-4"></footer>
        </div>
    );
}

export default App;
