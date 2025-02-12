import { Todo } from "./Todo.js";

const todoDialoguebox = () => {
  const todoDialoguebox = document.querySelector("#todoDialoguebox");

  if (!todoDialoguebox) {
    console.error("Element with ID 'todoDialoguebox' not found.");
    return;
  }

  todoDialoguebox.innerHTML = "";

  const todoAddBox = document.createElement("div");
  todoAddBox.classList.add("todoAddBox");

  todoAddBox.innerHTML = `
        <h2>Add New To-do</h2>
        <label>Title: <input type="text" id="todoTitle"></label>
        <label>Description: <textarea name="textarea" rows="5" id="todoDescription"></textarea></label>
        <label>Due Date: <input type="date" id="todoDueDate"></label>
        <label>Due Time: <input type="time" id="todoDueTime"></label>
        <label>Priority: 
            <select id="todoPriority">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
        </label>
        <div class="todoButtons">
            <button id="addTodo">Add Todo</button>
            <button id="cancelTodo">Cancel</button>
        </div>
    `;

  todoDialoguebox.appendChild(todoAddBox);
  todoDialoguebox.style.display = "block";

  document.querySelector("#cancelTodo").addEventListener("click", () => {
    todoDialoguebox.style.display = "none";
  });

  document.querySelector("#addTodo").addEventListener("click", () => {
    const title = document.querySelector("#todoTitle").value.trim();
    const description = document.querySelector("#todoDescription").value.trim();
    const dueDate = document.querySelector("#todoDueDate").value;
    const dueTime = document.querySelector("#todoDueTime").value;
    const priority = document.querySelector("#todoPriority").value;

    if (!title || !dueDate || !dueTime || !priority) {
      console.log("Empty fields");
      return;
    }

    const newTodo = new Todo(title, description, dueDate, dueTime, priority);
    
    displayTodo(newTodo);

    console.log("Saving To-do:", newTodo);
    todoDialoguebox.style.display = "none";
  });
};

function displayTodo(todo) {
  const projectContainer = document.querySelector(".project");
  if (!projectContainer) {
    console.error("Element with class 'project' not found.");
    return;
  }

  const newTodoElement = document.createElement("div");
  newTodoElement.classList.add("todo");
  newTodoElement.innerHTML = `
      <input type="checkbox" class="checkbox" />
      <p class="to-do-title">${todo.title}</p>
      <p class="dueDate">Due Date: ${todo.dueDate}</p>
      <p class="dueTime">Due Time: ${formatTime(todo.dueTime)}</p>
      <p class="priority">Priority: ${todo.priority}</p>
    `;

  projectContainer.appendChild(newTodoElement);
}

function clickTodo() {
  const todoButton = document.querySelector("#todo");

  if (!todoButton) {
    console.error("Element with ID 'todo' not found.");
    return;
  }

  todoButton.addEventListener("click", () => {
    todoDialoguebox();
  });
}

function formatTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes < 10 ? "0" + minutes : minutes} ${suffix}`;
}

clickTodo();

export { clickTodo };
