SELECT 
employee.id,
employee.first_name, 
employee.last_name, 
role.title, 
department.name AS department, 
role.salary AS salary,
CONCAT('employee.first_name', ' ', 'employee.last_name') AS manager;

FROM employee
LEFT JOIN role
ON role.id = employee.role_id

FROM employee
LEFT JOIN employee
ON employee.manager_id = employee.id

FROM role
LEFT JOIN department
ON role.department_id = role.id