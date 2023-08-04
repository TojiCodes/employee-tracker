const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'tojicodes', 
    password: 'rootroot', 
    database: 'employee_db'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database!");
});

module.exports = db;
