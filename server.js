// Import and require express
const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
// require inquirer
const inquirer = require("inquirer");
// require inquirer
const fs = require("fs");
const { init } = require("express/lib/application");

// adding port and app express
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
    return data;
};

// Add a department
function newDepartment() {
    if (data.choice === "Add Department")
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the department name?",
                }]),
            app.get('/', (req, res) => {
                db.query('INSERT "name" INTO department', function (err, results) {
                    console.log(results);
                });
                menu();
            })
};

// View department Table
function viewDepartments() {
    if (data.choice === "View All Departments")
        app.get('/', (req, res) => {
            db.query('SELECT * FROM department', function (err, results) {
                console.log(results);
            });
            menu();
        })
};

// View role Table
function viewRoles() {
    if (data.choice === "View All Roles")
        app.get('/', (req, res) => {
            db.query('SELECT * FROM role', function (err, results) {
                console.log(results);
            });
            menu();
        })
};

// View employees Table
function viewEmployees() {
    if (data.choice === "View All Employees")
        app.get('/', (req, res) => {
            db.query('SELECT * FROM employee', function (err, results) {
                console.log(results);
            });
            menu();
        })
};

// 

init() {
  menu();
};

init();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});