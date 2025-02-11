class Todo {
  static counter = 1;
  constructor(title, description, dueDate, dueTime, priority, notes = " ", checklist = []) {
    this.id = Todo.counter++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.completed = false;
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
