class todoProject{
    constructor(projectTitle){
        this.projectTitle=projectTitle;
        this.todos=[];
    }
    
    addTodo(todo){
        this.todos.push(todo);
    }

    removeTodo(todoId){
        this.todos= this.todos.filter(todo => todo.id !== todoId);
    }
}