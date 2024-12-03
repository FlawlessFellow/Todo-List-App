import { useState } from 'react';

interface TodoInputProps {
    handleAddTodo: (title: string, description: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ handleAddTodo }) => {
    const [newTitle, setNewTitle] = useState<string>('');
    const [newDescription, setNewDescription] = useState<string>('');

    const onAddClick = (): void => {
        handleAddTodo(newTitle, newDescription);
        setNewTitle('');
        setNewDescription('');
    };

    return (
        <div className="todo-input">
            <div className="todo-input-item">
                <label>Title</label>
                <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    type="text"
                    placeholder="What's the task title?"
                />
            </div>

            <div className="todo-input-item">
                <label>Description</label>
                <input
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    type="text"
                    placeholder="What's the task description?"
                />
            </div>

            <div className="todo-input-item">
                <button type="button" className="primaryBtn" onClick={onAddClick}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default TodoInput;
