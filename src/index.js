const db = require("./db");
const prompts = require("./prompts");

async function main() {
let exitLoop = false;

while (!exitLoop) {
    const { action } = await prompts.askForAction();

    switch (action) {
    case "View all departments":

        break;

    case "View all roles":

        break;

    case "View all employees":

        break;

    case "Add a department":

        break;

    case "Add a role":

        break;

        case "Add an employee":

        break;

    case "Update an employee role":

        break;

    case "Exit":
        exitLoop = true;
        break;
    }
}

db.close();
}

main();
