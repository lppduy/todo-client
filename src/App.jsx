import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Card, CardContent } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos(); // Fetch todos when the component mounts
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://todo-api-dyf7.onrender.com/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = (todo) => {
    setTodos(prevTodos => [todo, ...prevTodos]); // Ensure new array reference
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://todo-api-dyf7.onrender.com/api/todos/${id}`);
      setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id)); // Update todos state after deletion
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card className="myCard">
        <CardContent>
          <Box textAlign="center">
            <Typography variant="h2" gutterBottom>
              Todo List
            </Typography>
            <TodoForm addTodo={addTodo} fetchTodos={fetchTodos} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
