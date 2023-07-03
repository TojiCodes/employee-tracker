// Inside your db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "employee_db",
});

db.connect(function (err) {
if (err) throw err;
console.log("Connected to the database!");
});

module.exports = {
getAllDepartments() {
    return db.promise().query(`SELECT * FROM department`);
},
getAllRoles() {
    return db.promise().query(`SELECT * FROM role`);
},
getAllEmployees() {
    return db.promise().query(`SELECT * FROM employee`);
},

close() {
    db.end();
},
};
