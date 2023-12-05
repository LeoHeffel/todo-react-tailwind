
import Header from "./components/Header";
import ToDoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
function App() {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-100">
            <Header />

            <main className="container mx-auto px-4 mt-8 ">
                <ToDoCreate />

                <TodoList />

                <TodoComputed />

                <TodoFilter />
            </main>

            <section className="container mx-auto px-4 text-center mt-8">
                <p>Drag and drop to reorder list</p>
            </section>
            <footer className="container mx-auto px-4"></footer>
        </div>
    );
}

export default App;
