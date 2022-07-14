USE Scientists;

-- Write a query to display all information for all scientists that have the letter 'E' in their name;
SELECT SSN, name FROM Scientists
WHERE name LIKE '%E%';

-- Write a query to display the name of all projects whose code starts with the letter 'A'. Sort the result in alphabetical order;
SELECT name FROM Projects
WHERE code LIKE 'A%'
ORDER BY name ASC;

-- Write a query to display the code and name of all projects that have the number 3 in their code. Sort the result in alphabetical order;
SELECT code, name FROM Projects
WHERE code LIKE '%3%'
ORDER BY name ASC;

-- Write a query to display all scientists (numeric values) whose projects are 'AeH3', 'Ast3' or 'Che1';
SELECT scientist FROM AssignedTo
WHERE project IN ('AeH3', 'Ast3', 'Che1');

-- Write a query to display all information for all projects older than 500 hours;
SELECT code, name, hours FROM Projects
WHERE hours > 500
ORDER BY hours ASC;

-- Write a query to display all information for all projects whose hours are greater than 250 and less than 800;
SELECT code, name, hours FROM Projects
WHERE hours BETWEEN 250 AND 800
ORDER BY hours ASC;

-- Write a query to display the name and code of all projects whose name does NOT start with the letter 'A';
SELECT code, name FROM Projects
WHERE name NOT LIKE 'A%';

-- Write a query to display the name of all projects whose code contains the letter 'H';
SELECT name FROM Projects
WHERE code LIKE '%H%';