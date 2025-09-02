import tasksData from "@/services/mockData/tasks.json";

class TasksService {
  constructor() {
    this.tasks = [...tasksData];
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 200));
  }

  async getAll() {
    await this.delay();
    return [...this.tasks];
  }

  async getById(id) {
    await this.delay();
    const task = this.tasks.find(task => task.Id === parseInt(id));
    return task ? { ...task } : null;
  }

  async create(taskData) {
    await this.delay();
    const highestId = this.tasks.reduce((max, task) => Math.max(max, task.Id), 0);
    const newTask = {
      ...taskData,
      Id: highestId + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.tasks.push(newTask);
    return { ...newTask };
  }

  async update(id, taskData) {
    await this.delay();
    const index = this.tasks.findIndex(task => task.Id === parseInt(id));
    if (index !== -1) {
      this.tasks[index] = {
        ...this.tasks[index],
        ...taskData,
        Id: parseInt(id),
        updatedAt: new Date().toISOString()
      };
      return { ...this.tasks[index] };
    }
    return null;
  }

  async delete(id) {
    await this.delay();
    const index = this.tasks.findIndex(task => task.Id === parseInt(id));
    if (index !== -1) {
      const deletedTask = { ...this.tasks[index] };
      this.tasks.splice(index, 1);
      return deletedTask;
    }
    return null;
  }

  async getByType(taskType) {
    await this.delay();
    return this.tasks.filter(task => task.taskType === taskType).map(task => ({ ...task }));
  }

  async getByStatus(status) {
    await this.delay();
    return this.tasks.filter(task => task.status === status).map(task => ({ ...task }));
  }
}

export default new TasksService();