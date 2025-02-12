class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  printTodos() {
    console.log(`Todos in the project "${this.projectTitle}":`);
    this.todos.forEach((todo) => {
      console.log(
        `ID: ${todo.id}, Title: ${todo.title}, Priority: ${todo.priority}`
      );
    });
  }
}

export { Project };
