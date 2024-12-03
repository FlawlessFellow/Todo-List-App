import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import ButtonArea from './components/ButtonArea/ButtonArea';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './types/types';

function App() {
    const [isCompleteScreen, setIsCompleteScreen] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (title: string, description: string): void => {
        const newTodoItem: Todo = {
            id: Date.now().toString(),
            title,
            description,
            isComplete: false,
            createdOn: new Date().toLocaleString(),
        };
        setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    };

    const toggleComplete = (id: string): void => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete,
                        createdOn: todo.isComplete ? todo.createdOn : new Date().toLocaleString(),
                    };
                }
                return todo;
            })
        );
    };

    const deleteTodo = (id: string): void => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const filteredTodos = todos.filter((todo) => todo.isComplete === isCompleteScreen);

    return (
        <div className="App">
            <h1>My Todo's</h1>
            <div className="todo-wrapper">
                <TodoInput handleAddTodo={handleAddTodo} />
                <ButtonArea isCompleteScreen={isCompleteScreen} setIsCompleteScreen={setIsCompleteScreen} />
                <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            </div>
        </div>
    );
}

export default App;
