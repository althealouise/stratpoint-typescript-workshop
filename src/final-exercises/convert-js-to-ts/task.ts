enum TaskStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
  }
  
  interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: Date;
  }
  
  // task creation function
  function createTask(id: number, title: string, description: string, status: TaskStatus): Task {
    return {
      id,
      title,
      description,
      status,
      createdAt: new Date()
    };
  }
  
  // task list
  let tasks: Task[] = [];
  
  // add task to the list
  function addTask(task: Task): void {
    tasks.push(task);
  }
  
  // get task by ID
  function getTaskById(id: number): Task | undefined { // can be undefined since the value is not yet known
    return tasks.find(task => task.id === id);
  }
  
  // update task status
  function updateTaskStatus(id: number, newStatus: TaskStatus): void {
    const task = getTaskById(id);
    if (task) {
      task.status = newStatus;
    }
  }
  
  // task manager class
  class TaskManager {
    private tasks: Task[] = [];
  
    public addTask(task: Task): void {
      this.tasks.push(task);
    }
  
    public getTasksByStatus(status: TaskStatus): Task[] {
      return this.tasks.filter(task => task.status === status);
    }
  }
  
  // priority queue class
  class PriorityQueue<T> {
    private items: { element: T; priority: number }[] = [];
  
    public enqueue(element: T, priority: number): void {
      this.items.push({ element, priority });
      this.items.sort((a, b) => a.priority - b.priority);
    }
  
    public dequeue(): T | undefined {
      return this.items.shift()?.element;
    }
  }
  
  // utility function
  function isTaskOverdue(task: Task, currentDate: Date): boolean {
    const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    return task.createdAt < sevenDaysAgo && task.status !== TaskStatus.DONE;
  }
  
  // usage example
  const task1 = createTask(1, "Complete project", "Finish the project by Friday", TaskStatus.TODO);
  addTask(task1);
  
  const task2 = createTask(2, "Review code", "Review team's code", TaskStatus.IN_PROGRESS);
  const taskManager = new TaskManager();
  taskManager.addTask(task2);
  
  updateTaskStatus(1, TaskStatus.IN_PROGRESS);
  
  const priorityQueue = new PriorityQueue<Task>();
  priorityQueue.enqueue(task1, 2);
  priorityQueue.enqueue(task2, 1);
  
  console.log(getTaskById(1));
  console.log(taskManager.getTasksByStatus(TaskStatus.IN_PROGRESS));
  console.log(priorityQueue.dequeue());
  console.log(isTaskOverdue(task1, new Date()));
  