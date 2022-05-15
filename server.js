// Import and require express
const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
// require inquirer
const inquirer = require("inquirer");
// Import and console.table
const consoleTable = require("console.table");

// ?
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
.then((data) => {
  if (data.choice === "Add Department") {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the department name?",
        }]),
      app.get('/db', (req, res) => {
        const sql = `'INSERT name INTO department;`;
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

// View department Table
.then((data) => {
  if (data.choice === "View All Departments") {
    app.get('/db', (req, res) => {
      const sql = `'SELECT * FROM department;`;
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
    app.get('/db', (req, res) => {
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
    app.get('/db', (req, res) => {
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