USE hr;

-- 1. Write a query that displays the highest salary in the ~employees~ table;
-- Ir na mentoria ver se é a tabela correta**
SELECT MAX(salary) FROM employees;

-- 2. Write a query that displays the difference between the highest and lowest salary;
SELECT (MAX(salary) - MIN(salary)) AS 'salary diff' FROM employees;

-- 3. Write a query that displays the average salary of each job_id, sorting by the average salary in descending order;
SELECT AVG(salary) AS 'average salary', job_id FROM employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;

-- 4. Write a query that displays the amount of money needed to pay all employees;
SELECT SUM(salary) AS 'money needed to pay all employees' FROM employees;

-- 5. Write a query that displays four pieces of information: the highest salary, the lowest salary, the sum of all salaries and the average salary. All values ​​must be formatted to have only two decimal places;
SELECT
	ROUND(MAX(salary), 2) AS 'highest salary',
    ROUND(MIN(salary), 2) AS 'lowest salary',
    ROUND(SUM(salary), 2) AS 'sum of all salaries',
    ROUND(AVG(salary), 2) AS 'average salary'
FROM employees;

-- 6. Write a query that displays the number of people who work as programmers (it_prog);
SELECT COUNT(*) AS 'number of workers', job_id FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

-- 7. Write a query that displays the amount of money needed to pay for each profession (job_id);
SELECT job_id, SUM(salary) AS 'money to pay each profession' FROM employees
GROUP BY job_id;

-- 8. Using the previous query, make the changes so that only the amount of money needed to cover the payroll of programmers (it_prog) is displayed;
SELECT job_id, SUM(salary) AS 'money to pay each profession' FROM employees
GROUP BY job_id	
HAVING job_id = 'it_prog';

-- 9. Write a query that displays, in descending order, the average salary of all positions, except programmers (it_prog);
SELECT AVG(salary) AS 'average salary', job_id FROM employees
GROUP BY job_id
HAVING job_id <> 'it_prog';

-- 10. Write a query that displays average salary and the number of employees for all departments with more than ten employees. Tip: group by department_id;
SELECT AVG(salary) AS 'average salary', COUNT(*) AS 'employee quantity', department_id FROM employees
GROUP BY department_id
HAVING COUNT(*) > 10;

-- 11. Write a query that updates the phone_number column so that all phones starting with 515 must now start with 777;
-- replace ou update?
SELECT * FROM employees
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 0;
UPDATE employees
	SET phone_number = REPLACE(phone_number, 515, 777);

-- 12. Write a query that only displays information for employees whose first name is eight or more characters long;
SELECT first_name, CHAR_LENGTH(first_name) AS 'name length' FROM employees 
WHERE CHAR_LENGTH(first_name) >= 8;

-- 13. Write a query that displays the following information for each employee: id, first name and year they were hired (only display the year);
SELECT employee_id, first_name, YEAR(hire_date) AS 'year hired' FROM employees;

-- 14. Write a query that displays the following information for each employee: id, first name and day of the month in which they were hired (only display the day);
SELECT employee_id, first_name, DAY(hire_date) AS 'day hired' FROM employees;

-- 15. Write a query that displays the following information for each employee: id, first name and month in which they were hired (only display the month);
SELECT employee_id, first_name, MONTH(hire_date) AS 'month hired' FROM employees;

-- 16. Write a query that displays the names of employees in capital letters;
SELECT UCASE(first_name) AS 'first name upper case' FROM employees;

-- 17. Write a query that displays the last name and hire date of all employees hired in July 1987;
SELECT last_name, hire_date FROM employees
WHERE hire_date LIKE '1987-07%';

-- 18. Write a query that displays the following information for each employee: first name, last name, time working at the company (in days);
SELECT first_name, last_name, DATEDIFF(end_date, start_date) AS 'days worked' FROM employees JOIN job_history
ON (employees.employee_id = job_history.employee_id);
