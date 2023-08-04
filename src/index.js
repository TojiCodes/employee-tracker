const db = require('./db');
const prompts = require('./prompts');

async function main() {
    let exitLoop = false;

    while (!exitLoop) {
        const { action } = await prompts.askForAction();

        switch (action) {

        case 'Add a department':
            const { name } = await prompts.askForDepartmentName();
            await db.addDepartment(name);
            console.log(`Added department: ${name}`);
            break;

        case 'Add a role':
            const { title, salary, department_id } = await prompts.askForRoleInfo();
            await db.addRole(title, salary, department_id);
            console.log(`Added role: ${title}`);
            break;

        case 'Add an employee':
            const { first_name, last_name, role_id, manager_id } = await prompts.askForEmployeeInfo();
            await db.addEmployee(first_name, last_name, role_id, manager_id);
            console.log(`Added employee: ${first_name} ${last_name}`);
            break;

        case 'Update an employee role':
            const { employee_id, new_role_id } = await prompts.askForEmployeeRoleUpdateInfo();
            await db.updateEmployeeRole(employee_id, new_role_id);
            console.log(`Updated role for employee with id: ${employee_id}`);
            break;

        case 'View all departments':
            const [departments] = await db.viewDepartments();
            console.table(departments);
            break;

        case 'View all roles':
            const [roles] = await db.viewRoles();
            console.table(roles);
            break;

        case 'View all employees':
            const [employees] = await db.viewEmployees();
            console.table(employees);
            break;

        case 'Exit':
            exitLoop = true;
            await db.close();
            break;
        }
    }
}

main();
