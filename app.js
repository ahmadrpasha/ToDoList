let input = prompt("What would you like to do?");

let toDoList = [];

while (input !== 'quit' && input !== 'q') {

    if (input === 'new') {
        let newToDo = prompt('Enter new todo');
        toDoList.push(newToDo);
        console.log(`${newToDo} added to list`);
    } else if (input === 'list') {
        let index = 0;
        console.log("*****************");
        for (let item of toDoList) {
            console.log(`${index}: ${item}`);
            index++;
        }
        console.log("*****************");
    } else if (input === 'delete') {
        let deleteIndex = parseInt(prompt("Enter index of todo to delete"));
        if (!Number.isNaN(deleteIndex)) {
            toDoList.splice(deleteIndex, 1);
            console.log("Todo Removed");
        } else {
            console.log("Unknown index");
        }
    }

    input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
