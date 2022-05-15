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
          .then((data) => {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
      
        db.query(sql, [], (err, result) => {
          if (err) {
            res.status(400).json({ error: err.message });
          }
        })
        menu();
      })
      };
    });
};


// Add a department modeled after week 12 ex 28 mini project


// // Add a Role
// .then((data) => {
//   if (data.choice === "Add Role") {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "title",
//           message: "What is the title?",
//         },
//         {
//           type: "input",
//           name: "salary",
//           message: "What is the salary?",
//         },
//         {
//           type: "input",
//           name: "department_id",
//           message: "What is the department this role belong to?",
//         }
//       ]),
//       app.post("/api", ({ body }, res) => {
//         const sql = `INSERT INTO role (title, salary, department_id) 
//             VALUES (?,?,?)`;
//         const params = [body.movie_name];
//         db.query(sql, params, (err, result) => {
//           if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//           }
//           res.json({
//             message: "success",
//             data: body,
//           });
//         })
//       });
//   }
//   menu();
// });

// // Add an Employee
// .then((data) => {
//   if (data.choice === "Add Employee") {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "first_name",
//           message: "What is the employee's first name?",
//         },
//         {
//           type: "input",
//           name: "last_name",
//           message: "What is the employee's first name?",
//         },
//         {
//           type: "input",
//           name: "role_id",
//           message: "What is the employee's role id?",
//         },
//         {
//           type: "input",
//           name: "manager_id",
//           message: "What is the employee's manager's id?",
//         }
//       ]),
//       app.post("/api", ({ body }, res) => {
//         const sql = `INSERT INTO employee (first_name, last_name, role_id,manager_id)
//             VALUES (?,?,?,?)`;
//         const params = [body.movie_name];
//         db.query(sql, params, (err, result) => {
//           if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//           }
//           res.json({
//             message: "success",
//             data: body,
//           });
//         })
//       });
//   }
//   menu();
// });

// // update an Employee Role
// .then((data) => {
//   

// // View department Table
// .then((data) => {
//         
//         menu();
//       });

// // View role Table
// .then((data) => {
//         if (data.choice === "View All Roles") {
//           app.get('/api', (req, res) => {
//             const sql = `'SELECT * FROM role;`;
//             db.query(sql, (err, rows) => {
//               if (err) {
//                 res.status(500).json({ error: err.message });
//                 return;
//               }
//               res.json({
//                 message: "success",
//                 data: rows,
//               });
//             })
//           });
//         }
//         menu();
//       });

// // View employees Table
// .then((data) => {
//         if (data.choice === "View All Employees") {
//           app.get('/api', (req, res) => {
//             const sql = `'SELECT * FROM employee;`;
//             db.query(sql, (err, rows) => {
//               if (err) {
//                 res.status(500).json({ error: err.message });
//                 return;
//               }
//               res.json({
//                 message: "success",
//                 data: rows,
//               });
//             })
//           });
//         }
//         menu();
//       });

function init() {
  menu();
};

init();
