const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

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
      },
      .then((data) => {
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
              })
        })])
}

// app.get('/', (req, res) => {
//   db.query('SELECT * FROM favorite_books', function (err, results) {
//     console.log(results);
//   });
// });

// app.get('/api/terms', (req, res) => res.json(termData));


// // Query database
// db.query('SELECT * FROM course_names', function (err, results) {
//   console.log(results);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});