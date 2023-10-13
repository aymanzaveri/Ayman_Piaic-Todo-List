import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your list?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "DO  you want to add more?"
        },
    ]);
    const { TODO, addMore } = answers;
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your ToDo List is:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("Nothing for Today");
}
