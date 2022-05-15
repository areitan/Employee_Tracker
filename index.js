// required variables
const inquirer = require("inquirer");
const fs = require("fs");

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

function newDepartment() (data) {
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

function viewDepartments(data) {
    if (data.choice === "View All Departments")
        app.get('/', (req, res) => {
            db.query('SELECT * FROM department', function (err, results) {
                console.log(results);
            });
            menu();
        })
};

function viewRoles(data) {
    if (data.choice === "View All Roles")
        app.get('/', (req, res) => {
            db.query('SELECT * FROM role', function (err, results) {
                console.log(results);
            });
            menu();
        })
};

function viewEmployees(data) {
    if (data.choice === "View All Employees")
        app.get('/', (req, res) => {
            db.query('SELECT * FROM employee', function (err, results) {
                console.log(results);
            });
            menu();
        })
};