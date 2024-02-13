
import React, { useState } from 'react';

export default function TodoInput({ addList }) {
    const [inputText, setInputText] = useState('');
    const handleAdd = () => {
        if (inputText.trim() !== '') {
            addList(inputText.trim());
            setInputText('');
        }
    };
    return (
        <div className='input-container'>
            <input
                type='text'
                className='input-box-todo'
                placeholder='Enter your todo'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button
                className='add-btn'
                onClick={handleAdd}
            > + </button>
        </div>
    );
}
