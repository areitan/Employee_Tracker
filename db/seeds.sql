NSERT INTO department (dept_name)
VALUES ("IT"),
       ("Accounting"),
       ("Facilities"),
       ("Security");

INSERT INTO role (title, salsary, department_id)
VALUES ("Manager", 75,000.00, 3),
       ("Assistant", 55,000.00, 3),
       ("Guard", 55,000.00, 4),
       ("Developer", 100,000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("April", "Showers", 1, 4),
       ("Mei", "Flowers", 2, 3),
       ("June", "Sechs", 3, 2),
       ("Julio", "Siete", 4, 1);