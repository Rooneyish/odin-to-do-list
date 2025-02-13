class Todo {
  static counter = 1;
  constructor(title, description, dueDate, dueTime, priority) {
    this.id = Todo.counter++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.priority = priority;
    this.completed = false;
  }

  static initializedData() {
    const todoElements = document.querySelectorAll(".todo"); 
    const todos = [];

    todoElements.forEach(todoElement => {
      const title = todoElement.querySelector(".to-do-title")?.textContent?.trim() || "Untitled";
      const description = "Example Tasks";
      const dueDate = todoElement.querySelector(".dueDate")?.textContent?.replace("Due Date: ", "").trim() || "No date";
      const dueTime = todoElement.querySelector(".dueTime")?.textContent?.replace("Due Time: ", "").trim() || "No time";
      const priority = todoElement.querySelector(".priority")?.textContent?.replace("Priority: ", "").trim() || "Normal";

      const todo = new Todo(title, description,dueDate, dueTime, priority);
      todos.push(todo);
    });

    return todos;
  }
  markCompleted() {
    this.completed = true;
  }

  addCheckListItem(item) {
    this.checklist.push(item);
  }

  removeCheckListItem(itemIndex) {
    this.checklist.splice(itemIndex, 1);
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }
}

export { Todo };
