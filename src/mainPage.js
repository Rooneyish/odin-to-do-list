const createTodoDialoguebox = () => {
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
    console.log("Saving To-do:", {
      title: document.querySelector("#todoTitle").value,
      dueDate: document.querySelector("#todoDueDate").value,
      dueTime: document.querySelector("#todoDueTime").value,
      priority: document.querySelector("#todoPriority").value,
    });
    todoDialoguebox.style.display = "none";
  });
};

function clickTodo() {
  const todoButton = document.querySelector("#todo");

  if (!todoButton) {
    console.error("Element with ID 'todo' not found.");
    return;
  }

  todoButton.addEventListener("click", function () {
    createTodoDialoguebox();
  });
}

clickTodo();

export { clickTodo };
