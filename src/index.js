import { Todo } from './Todo.js'; 
import { Project } from './Project.js';
import "./styles.css";

const myTodo = new Todo(
  "Buy groceries",
  "Milk, eggs, bread, and cheese",
  "2023-10-15",
  "10:00 AM",
  "High"
);

const myTodo1 = new Todo(
  "Complete homework",
  "Math, Science, and History assignments",
  "2023-10-16",
  "9:00 AM",
  "Medium"
);

const myProject = new Project("Homework Project");
myProject.addTodo(myTodo);
myProject.addTodo(myTodo1);

myProject.removeTodo(1);

myProject.printTodos();
