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