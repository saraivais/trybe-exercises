USE Scientists;

SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 3, 4, 5;
SELECT 10 + 15;
SELECT (3 + 2) * pi();

SELECT name FROM Scientists;

SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho' FROM Projects;

SELECT name FROM Scientists
ORDER BY name ASC;

SELECT name FROM Projects
ORDER BY name DESC;

SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluido') FROM Projects;

SELECT name, hours FROM Projects
ORDER BY hours DESC LIMIT 3;

SELECT DISTINCT scientist, project FROM AssignedTo;

SELECT * FROM Projects
ORDER BY hours DESC LIMIT 1;

SELECT * FROM Projects
ORDER BY hours ASC LIMIT 1 OFFSET 1;

SELECT * FROM Projects
ORDER BY hours ASC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(DISTINCT name), ' cientistas na tabela Scientists') FROM Scientists;

