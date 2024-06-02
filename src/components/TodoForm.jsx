import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const response = await axios.post('https://todo-api-dyf7.onrender.com/api/todos', { text });
      addTodo(response.data); // Add new todo to the list
      setText(''); // Clear input field
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <TextField
        label="Add Todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
