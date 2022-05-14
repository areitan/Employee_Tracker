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
        ])
}

// .then((data) => {
//     if (data.choice === "Add Department") {
//       inquirer
//         .prompt([
//           {
//             type: "input",
//             name: "department_name",
//             message: "What is the department name?",
//           },
//       ])
//       .then((data) => {
//         // const newDepartment = new newDepartment(data.DepartmentName,)
//         // Team.push(newEngineer);
//         menu();

//       })
//     }})