import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

interface Todo {
    id: string;
    title: string;
    description: string;
    isComplete: boolean;
    createdOn: string;
}

interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <div key={todo.id} className="todo-list-item">
                    <div>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        {todo.isComplete && <p className="date">Created: {todo.createdOn}</p>}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AiOutlineDelete className="deleteIcon" title="Delete?" onClick={() => deleteTodo(todo.id)} />
                        {!todo.isComplete && (
                            <BsCheckLg className={`checkIcon`} title="Complete?" onClick={() => toggleComplete(todo.id)} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
