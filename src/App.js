import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setListTodo(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []); 
  const addList = (inputText) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: inputText,
      completed: false
    })
    .then(response => {
      setListTodo([response.data,...listTodo]);
    })
    .catch(error => {
      console.error('Error adding task:', error);
    });
  };
  const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(() => {
      setListTodo(listTodo.filter(todo => todo.id !== id));
    })
    .catch(error => {
      console.error('Error deleting task:', error);
    });
  };
  const editTodo = (id, newText) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { title: newText })
    .then(response => {
      setListTodo(listTodo.map(todo => todo.id === id ? response.data : todo));
    })
    .catch(error => {
      console.error('Error editing task:', error);
    });
  };

  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList} />
        <h1 className='main-heading'>TODO</h1>
        <hr />
        {listTodo.map((todo) => (
          <TodoList
            key={todo.id}
            id={todo.id}
            title={todo.title}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
