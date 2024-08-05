export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
}

export type TodoInput = Omit<Todo, 'id' | 'completed'>;