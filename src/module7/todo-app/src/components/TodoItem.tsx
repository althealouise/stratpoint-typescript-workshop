import React from 'react';
import { Todo } from '../models/Todo';
import { useTodoContext } from '../context/TodoContext';
import { DateUtils } from '../utils/DateUtils';
import './TodoItem.css'; // Add CSS for styling

interface TodoItemProps {
  todo: Todo;
}

const priorityColors: Record<string, string> = {
  high: 'text-high',
  medium: 'text-medium',
  low: 'text-low',
};

export function TodoItem({ todo }: TodoItemProps) {
  const { updateTodo, deleteTodo } = useTodoContext();

  // Inline style for priority background
  const priorityClass = priorityColors[todo.priority] || '';

  return (
    <tr className="todo-item">
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{DateUtils.formatDate(todo.dueDate)}</td>
      <td className={priorityClass}>
        {todo.priority}
      </td>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
        />
      </td>
      <td>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}

