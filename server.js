// Imports and requires
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const { init } = require("express/lib/application");

// port and app express
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

// const input = []

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

// Add a department modeled after week 12 ex 28 mini project
.then((data) => {
  if (data.choice === "Add Department") {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the department name?",
        }]),
      app.post("/api", ({ body }, res) => {
        const sql = `INSERT INTO department (name)
            VALUES (?)`;
        const params = [body.movie_name];
        db.query(sql, params, (err, result) => {
          if (err) {
            res.status(400).json({ error: err.message });
            return;
          }
          res.json({
            message: "success",
            data: body,
          });
        })
      });
  }
  menu();
});

// Add a Role
.then((data) => {
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
      ]),
      app.post("/api", ({ body }, res) => {
        const sql = `INSERT INTO role (title, salary, department_id) 
            VALUES (?,?,?)`;
        const params = [body.movie_name];
        db.query(sql, params, (err, result) => {
          if (err) {
            res.status(400).json({ error: err.message });
            return;
          }
          res.json({
            message: "success",
            data: body,
          });
        })
      });
  }
  menu();
});

// Add an Employee
.then((data) => {
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
          message: "What is the employee's first name?",
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
      ]),
      app.post("/api", ({ body }, res) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id,manager_id)
            VALUES (?,?,?,?)`;
        const params = [body.movie_name];
        db.query(sql, params, (err, result) => {
          if (err) {
            res.status(400).json({ error: err.message });
            return;
          }
          res.json({
            message: "success",
            data: body,
          });
        })
      });
  }
  menu();
});

// update an Employee Role
.then((data) => {
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
      ]),
      app.put("/api/employee/:id", (req, res) => {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        const params = [req.body.review, req.params.id];

        db.query(sql, params, (err, result) => {
          if (err) {
            res.status(400).json({ error: err.message });
          } else if (!result.affectedRows) {
            res.json({
              message: "Employee not found",
            });
          } else {
            res.json({
              message: "success",
              data: req.body,
              changes: result.affectedRows,
            });
          }
        });
        menu();
      });

// View department Table
.then((data) => {
        if (data.choice === "View All Departments") {
          app.get('/api', (req, res) => {
            const sql = `'SELECT id, name AS Department FROM department;`;
            db.query(sql, (err, rows) => {
              if (err) {
                res.status(500).json({ error: err.message });
                return;
              }
              res.json({
                message: "success",
                data: rows,
              });
            })
          });
        }
        menu();
      });

// View role Table
.then((data) => {
        if (data.choice === "View All Roles") {
          app.get('/api', (req, res) => {
            const sql = `'SELECT * FROM role;`;
            db.query(sql, (err, rows) => {
              if (err) {
                res.status(500).json({ error: err.message });
                return;
              }
              res.json({
                message: "success",
                data: rows,
              });
            })
          });
        }
        menu();
      });

// View employees Table
.then((data) => {
        if (data.choice === "View All Employees") {
          app.get('/api', (req, res) => {
            const sql = `'SELECT * FROM employee;`;
            db.query(sql, (err, rows) => {
              if (err) {
                res.status(500).json({ error: err.message });
                return;
              }
              res.json({
                message: "success",
                data: rows,
              });
            })
          });
        }
        menu();
      });

    function init() {
      menu();
    };

    init();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });