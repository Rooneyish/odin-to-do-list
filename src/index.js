import "./styles.css";
import { clickTodo } from "./todoForm.js";
import { Todo } from "./Todo.js";

document.addEventListener("DOMContentLoaded", () => {
  const todoList = Todo.initializedData(); 
  console.log(todoList); 
});
clickTodo();
