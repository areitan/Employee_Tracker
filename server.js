// Imports and requires
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "1234",
    database: "employee_db",
  },
  console.log(`Connected to employee_db database.`)
);

// Menu function using inquirer
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]
      },])
    .then((data) => {
      // Add Department
      if (data.choice === "Add Department") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the department name?",
            }])
          .then(({ name }) => {
            const sql = `INSERT INTO department (name)
              VALUES (?)`;
            db.query(sql, [name], (err, result) => {
              menu();
            })
          })
      }
      // Add Role
      if (data.choice === "Add Role") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "title",
              message: "What is the title?",
            },
            {
              type: "input",
              name: "salary",
              message: "What is the salary?",
            },
            {
              type: "input",
              name: "department_id",
              message: "What is the department this role belong to?",
            }
          ])
          .then(({ title, salary, department_id }) => {
            const sql = `INSERT INTO role (title, salary, department_id)
            VALUES (?,?,?)`;
            db.query(sql, [title, salary, department_id], (err, result) => {
              menu();
            })
          })
      }
      // Add Employee
      if (data.choice === "Add Employee") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "first_name",
              message: "What is the employee's first name?",
            },
            {
              type: "input",
              name: "last_name",
              message: "What is the employee's last name?",
            },
            {
              type: "input",
              name: "role_id",
              message: "What is the employee's role id?",
            },
            {
              type: "input",
              name: "manager_id",
              message: "What is the employee's manager's id?",
            }
          ])
          .then(({ first_name, last_name, role_id, manager_id }) => {
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES (?,?,?,?)`;
            db.query(sql, [first_name, last_name, role_id, manager_id], (err, result) => {
              menu();
            })
          })
      }
      // Update Employee Role
      if (data.choice === "Update Employee Role") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "id",
              message: "What is the employee's id?",
            },
            {
              type: "input",
              name: "role_id",
              message: "What is the employee's new role id?",
            },
          ])
          .then(({ id, role_id }) => {
            const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
            db.query(sql, [role_id, id], (err, result) => {
              menu();
            })
          })
      }
      // View All Departments
      if (data.choice === "View All Departments") {
        const sql = `SELECT id, name AS Department FROM department`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log(err);
            return;
          }
          console.table(rows)
          menu();
        });
      }
      if (data.choice === "View All Employees") {
        const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(mgr.first_name," ", mgr.last_name) AS manager FROM employee LEFT JOIN employee mgr ON mgr.id = employee.manager_id LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log(err);
            return;
          }
          console.table(rows)
          menu();
        });
      }
      // View All Roles
      if (data.choice === "View All Roles") {
        const sql = `SELECT role.title AS Title, role.id AS Role_ID, department.name AS Department, role.salary AS Salary FROM role JOIN department ON role.department_id = department.id`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log(err);
            return;
          }
          console.table(rows)
          menu();
        });
      }
    });
};

// Application start
function init() {
  menu();
};

init();
