import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodoContext } from '../context/TodoContext';
import './TodoList.css'; // Add CSS for styling

export function TodoList() {
  const { todos } = useTodoContext();

  return (
    <table className="todo-list">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
}
