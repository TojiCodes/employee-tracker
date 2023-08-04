const db = require('./connection');

function addDepartment(name) {
    return db.promise().query(`INSERT INTO department (name) VALUES (?)`, [name]);
}

function addRole(title, salary, department_id) {
    return db.promise().query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, department_id]);
}

function addEmployee(first_name, last_name, role_id, manager_id) {
    return db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [first_name, last_name, role_id, manager_id]);
}

function updateEmployeeRole(employee_id, role_id) {
    return db.promise().query(`UPDATE employee SET role_id = ? WHERE id = ?`, [role_id, employee_id]);
}

function viewDepartments() {
    return db.promise().query(`SELECT * FROM department`);
}

function viewRoles() {
    return db.promise().query(`SELECT * FROM role`);
}

function viewEmployees() {
    return db.promise().query(`SELECT * FROM employee`);
}

function close() {
    return db.end();
}

module.exports = { 
    addDepartment, 
    addRole, 
    addEmployee, 
    updateEmployeeRole, 
    viewDepartments, 
    viewRoles, 
    viewEmployees,
    close,
};
