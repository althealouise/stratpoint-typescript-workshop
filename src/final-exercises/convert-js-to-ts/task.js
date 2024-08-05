const TaskStatus = {
    TODO: 'TODO',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE'
  };
  
  // Task creation function
  function createTask(id, title, description, status) {
    return {
      id,
      title,
      description,
      status,
      createdAt: new Date()
    };
  }
  
  // Task list
  let tasks = [];
  
  // Add task to the list
  function addTask(task) {
    tasks.push(task);
  }
  
  // Get task by ID
  function getTaskById(id) {
    return tasks.find(task => task.id === id);
  }
  
  // Update task status
  function updateTaskStatus(id, newStatus) {
    const task = getTaskById(id);
    if (task) {
      task.status = newStatus;
    }
  }
  
  // Task manager
  const TaskManager = {
    tasks: [],
    addTask: function(task) {
      this.tasks.push(task);
    },
    getTasksByStatus: function(status) {
      return this.tasks.filter(task => task.status === status);
    }
  };
  
  // Priority Queue
  function PriorityQueue() {
    this.items = [];
  }
  
  PriorityQueue.prototype.enqueue = function(element, priority) {
    this.items.push({ element, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  };
  
  PriorityQueue.prototype.dequeue = function() {
    return this.items.shift();
  };
  
  // Utility function
  function isTaskOverdue(task, currentDate) {
   // Assuming tasks are overdue if they're older than 7 days and not completed
    const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    return task.createdAt < sevenDaysAgo && task.status !== TaskStatus.DONE;
  }
  
  // Usage example
  const task1 = createTask(1, "Complete project", "Finish the project by Friday", TaskStatus.TODO);
  addTask(task1);
  
  const task2 = createTask(2, "Review code", "Review team's code", TaskStatus.IN_PROGRESS);
  TaskManager.addTask(task2);
  
  updateTaskStatus(1, TaskStatus.IN_PROGRESS);
  
  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue(task1, 2);
  priorityQueue.enqueue(task2, 1);
  
  console.log(getTaskById(1));
  console.log(TaskManager.getTasksByStatus(TaskStatus.IN_PROGRESS));
  console.log(priorityQueue.dequeue());
  console.log(isTaskOverdue(task1, new Date()));