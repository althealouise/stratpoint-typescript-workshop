import React, { createContext, useContext, ReactNode } from 'react';
import { useTodos } from '../hooks/useTodos';
import { Todo, TodoInput } from '../models/Todo';

interface TodoContextType {
  todos: Todo[];
  addTodo: (input: TodoInput) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const todoMethods = useTodos();

  return (
    <TodoContext.Provider value={todoMethods}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}