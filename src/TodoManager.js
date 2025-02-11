import { Project } from './Project.js';
import { Todo } from './Todo.js';

class TodoManager {
  constructor() {
    this.projects = [];
    this.defaultProject = new Project("School");
    this.projects.push(this.defaultProject);
  }

  createTodo(title, description, dueDate, dueTime, priority, notes = " ", checklist = []) {
    return new Todo(title, description, dueDate, dueTime, priority, notes, checklist);
  }

  addTodoToProject(projectTitle, todo) {
    const project = this.projects.find((proj) => proj.projectTitle === projectTitle);
    if (project) {
      project.addTodo(todo);
    } else {
      console.error(`Project '${projectTitle}' not found.`);
    }
  }

  createProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
    return newProject;
  }

  removeProject(title) {
    this.projects = this.projects.filter((project) => project.projectTitle !== title);
  }
}

export { TodoManager };
