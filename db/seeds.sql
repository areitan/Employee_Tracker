NSERT INTO department (name)
VALUES ("IT"),
       ("Accounting"),
       ("Facilities"),
       ("Security");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 75000, 3),
       ("Assistant", 55000, 3),
       ("Guard", 55000, 4),
       ("Developer", 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("April", "Showers", 1, 4),
       ("Mei", "Flowers", 2, 3),
       ("June", "Sechs", 3, 2),
       ("Julio", "Siete", 4, 1);