USE sakila;

-- All employees were promoted to actors. Build a query that displays the union of the staff table with the actor table, displaying only the first and last name. Your result should not exclude any employees when joining the tables;
SELECT first_name, last_name FROM staff
UNION ALL
SELECT first_name, last_name FROM actor;

-- Build a query that joins the results of the customer and actor tables, displaying the names that contain the word "tracy" in the customer table and those that contain "je" in the actor table. Display only unique results;
SELECT first_name, last_name FROM customer 
WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name, last_name FROM actor
WHERE first_name LIKE '%je%';

-- Build a query that displays the union of the last five names of the actor table, the first name of the staff table and five names starting from the 15th position of the customer table. Do not allow duplicate data to be displayed. Sort the results in alphabetical order;
(SELECT first_name, last_name FROM actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name, last_name FROM staff LIMIT 1)
UNION 
(SELECT first_name, last_name FROM customer LIMIT 5 OFFSET 14);

-- You want to display a paginated list of the first and last names of all customers and actors in the database, in alphabetical order. Assume that pagination is being done 15 out of 15 results and that you are on the 4th page. Build a query that simulates this scenario;
SELECT first_name, last_name FROM actor
UNION ALL
SELECT first_name, last_name FROM customer
ORDER BY first_name ASC, last_name ASC
LIMIT 15 OFFSET 45;
