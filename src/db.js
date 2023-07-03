module.exports = {
    addDepartment(name) {
    return db.promise().query(`INSERT INTO department (name) VALUES (?)`, [name]);
    },

    addRole(title, salary, department_id) {
    return db.promise().query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, department_id]);
    },

    addEmployee(first_name, last_name, role_id, manager_id) {
    return db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [first_name, last_name, role_id, manager_id]);
    },

    updateEmployeeRole(employee_id, role_id) {
    return db.promise().query(`UPDATE employee SET role_id = ? WHERE id = ?`, [role_id, employee_id]);
    },
};
