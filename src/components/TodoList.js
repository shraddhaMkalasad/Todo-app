
import React from 'react';

export default function TodoList({ id, title, deleteTodo, editTodo }) {
    const handleDelete = () => {
        deleteTodo(id);
    };
    const handleEdit = () => {
        const newText = prompt('Enter new text:', title);
        if (newText && newText.trim() !== '') {
            editTodo(id, newText.trim());
        }
    };
    return (
        <li className='list-item'>
            {title}
            <button className='edit-btn' onClick={handleEdit}>
                Edit
            </button>
            <button className='delete-btn' onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
}
