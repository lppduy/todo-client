import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <List>
        {todos.map(todo => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo._id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
