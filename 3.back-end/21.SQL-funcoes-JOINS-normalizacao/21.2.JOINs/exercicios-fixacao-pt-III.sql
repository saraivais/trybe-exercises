USE hr;

SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
	employees AS Employee
	INNER JOIN employees AS Manager
		ON Employee.manager_id = Manager.employee_id;

-- We want to know the name of the collaborating people and their respective management (manager) whose departments (department) are different;
SELECT 
    CONCAT(Employees.first_name, ' ', Employees.last_name) AS employee_name,
    CONCAT(Managers.first_name, ' ', Managers.last_name) AS manager_name
FROM
	employees AS Employees
    INNER JOIN employees AS Managers
		ON Employees.manager_id = Managers.employee_id
	WHERE Employees.department_id <> Managers.department_id
    ORDER BY manager_name ASC;

-- Display the Name and number of people led by each manager person;
SELECT
	CONCAT(man.first_name, ' ', man.last_name) AS manager_name,
    COUNT(emp.first_name) AS employee_quantity
FROM 
	employees AS emp
    INNER JOIN employees AS man
		ON emp.manager_id = man.employee_id
	GROUP BY manager_name
    ORDER BY employee_quantity DESC;

