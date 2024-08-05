import { useState, useCallback } from 'react';
import { Todo, TodoInput } from '../models/Todo';
import { TodoService } from '../services/TodoService';

// Create a single instance of TodoService
const todoService = new TodoService();

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(todoService.getTodos());

  const addTodo = useCallback((input: TodoInput) => {
    const newTodo = todoService.addTodo(input);
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  const updateTodo = useCallback((id: string, updates: Partial<Todo>) => {
    const updatedTodo = todoService.updateTodo(id, updates);
    if (updatedTodo) {
      setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? updatedTodo : todo));
    }
  }, []);

  const deleteTodo = useCallback((id: string) => {
    if (todoService.deleteTodo(id)) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
  }, []);

  return { todos, addTodo, updateTodo, deleteTodo };
}
