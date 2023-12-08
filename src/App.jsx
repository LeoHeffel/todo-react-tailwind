import { DragDropContext} from "@hello-pangea/dnd";
import Header from "./components/Header";
import ToDoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];


const reorder = (list, startIndex,endIndex) => {
    const items = Array.from(list);
    const [reorderedItem] = items.splice(startIndex, 1);
    items.splice(endIndex, 0, reorderedItem);
    return items;
};

function App() {
    const [todos, setTodos] = useState(initialStateTodos);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const createTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ]);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
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
    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = reorder(
            todos,
            result.source.index,
            result.destination.index
        );
        setTodos(items);}

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-contain min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] dark:bg-gray-900 bg-gray-100">
            <Header />

            <main className="container mx-auto px-4 mt-8 md:max-w-xl">
                <ToDoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filterTodos(filter)}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                </DragDropContext>


                <TodoComputed
                    left={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter setFilter={setFilter} />
            </main>

            <section className="container mx-auto px-4 text-center mt-8  text-gray-400 ">
                <p>Drag and drop to reorder list</p>
            </section>
            <footer className="container mx-auto px-4"></footer>
        </div>
    );
}

export default App;
