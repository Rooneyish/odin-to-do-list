import { Project } from "./Project";

const projectDialogbox = () =>{
    const projectDialogbox = document.querySelector("#projectDialogueBox");

    if(!projectDialogbox){
        console.error("Element with ID 'projectDialogueBox' not found.")
        return;
    }

    const projectAddBox = document.createElement("div");
    projectAddBox.classList.add("projectAddBox");

    projectAddBox.innerHTML = `
        <h2>Add New Project</h2>
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
    `
}