import { Todo, TodoInput } from '../models/Todo';

export class TodoService {
  private todos: Todo[] = [];

  addTodo(input: TodoInput): Todo {
    const newTodo: Todo = {
      ...input,
      id: Date.now().toString(),
      completed: false
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  updateTodo(id: string, updates: Partial<Todo>): Todo | undefined {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...updates };
      return this.todos[index];
    }
    return undefined;
  }

  deleteTodo(id: string): boolean {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos.length !== initialLength;
  }
}