class todo{
    constructor(title, description, dueDate, dueTime, priority, notes=" ", checklist=[]){
        this.id = Math.random.toString(36).substr(2,9);
        this.title=title;
        this.description=description;
        this.dueDate= dueDate;
        this.dueTime= dueTime;
        this.priority= priority;
        this.notes= notes;
        this.checklist= checklist;
        this.completed= false;
    }

    markCompleted(){
        this.completed=true;
    }

    addCheckListItem(item){
        this.checklist.push(item);
    }

    removeCheckListItem(itemIndex){
        this.checklist.splice(itemIndex, 1)
    }

    updatePriority(newPriority){
        this.priority=newPriority;
    }
}
