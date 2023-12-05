
import Header from "./components/Header";
import ToDoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    {
        id: 1,
        text: "Learn React",
        completed: true
    },
    {
        id: 2,
        text: "Learn Tailwind",
        completed: false
    },
    {
        id: 3,
        text: "Learn Vite",
        completed: false
    },
    {
        id: 4,
        text: "Learn React Router",
        completed: false
    }
];
function App() {
    const [todos, setTodos] = useState(initialStateTodos);
    const [filter, setFilter] = useState("all");
    const createTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                completed: false
            }
        ]);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const updateTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };
    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };
    const filterTodos = (filter) => {
        switch (filter) {
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-100">
            <Header />

            <main className="container mx-auto px-4 mt-8 ">
                <ToDoCreate createTodo={createTodo} />

                <TodoList todos={filterTodos(filter)} deleteTodo={deleteTodo} updateTodo={updateTodo} />

                <TodoComputed todos={todos} clearCompleted={clearCompleted} />

                <TodoFilter setFilter={setFilter} />
            </main>

            <section className="container mx-auto px-4 text-center mt-8">
                <p>Drag and drop to reorder list</p>
            </section>
            <footer className="container mx-auto px-4"></footer>
        </div>
    );
}

export default App;
