const mysql = require("mysql2/promise");

class Database {
constructor(config) {
    this.connection = mysql.createConnection(config);
}

async query(sql, params) {
    const [rows] = await this.connection.promise().query(sql, params);
    return rows;
}

close() {
    return this.connection.end();
}
}

module.exports = new Database({
host: "localhost",
user: "root",
password: "your_password",
database: "employee_db",
});
