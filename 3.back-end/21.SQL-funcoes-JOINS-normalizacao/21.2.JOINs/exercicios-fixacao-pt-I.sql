USE sakila;

-- 1. Create a query that displays the actor's id, actor's name and id of the movie in which he has acted, using the actor and film_actor tables;
SELECT CONCAT(a.first_name, ' ', a.last_name) AS 'actor fullname', a.actor_id, fa.film_id
FROM actor AS a INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id;

-- 2. Use JOIN to display the first name, last name and address of each of the database's employees. Use the staff and address tables;
-- Dúvida~ using aliases, does it have to be right names? or any random name can work
SELECT s.first_name, s.last_name, CONCAT(a.address, ' - ', a.district) AS 'full address'
FROM staff AS s INNER JOIN address AS a
ON s.address_id = a.address_id;

-- 3. Display the customer id, name and email of the first 100 customers, sorted by name in descending order, along with the address id and street name where the customer lives. This information can be found in the customer and address tables;
SELECT 
	c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS 'customer name',
    c.email,
    c.address_id,
    CONCAT(a.address, ' - ', a.district) AS 'customer address'
FROM customer AS c INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name ASC, c.last_name ASC
LIMIT 100;

-- 4. Display the name, email, address id, address and district of customers who live in the district of California and who contain "rene" in their name. Information can be found in the address and customer tables;
SELECT 
	CONCAT(c.first_name, ' ', c.last_name) AS 'customer name',
    c.email,
    c.address_id,
    a.address,
    a.district
FROM customer AS c INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';

-- 5. Display the name and number of addresses of registered customers. Sort your results by names in descending order. Display only active customers. The information can be found in the address and customer table;
SELECT
	c.customer_id,
	c.first_name,
    COUNT(a.address) AS address_quantity
FROM address AS a INNER JOIN customer AS c
ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

-- Error Code: 1140. In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column 'sakila.c.first_name'; this is incompatible with sql_mode=only_full_group_by
-- Error Code: 1054. Unknown column 'c.active' in 'having clause'
-- Error Code: 1055. Expression #3 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'sakila.customer.active' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by

-- 6. Build a query that displays the name, surname and the average amount paid to employees in 2006. Use the payment and staff tables. The results must be grouped by the employee's first and last name;
SELECT
	CONCAT(s.first_name, ' ', s.last_name) AS full_name,
    AVG(p.amount) AS 'average_paid'
FROM payment AS p INNER JOIN staff AS s
ON s.staff_id = p.staff_id
GROUP BY full_name;

-- 7. Build a query that displays the actor's id, name, movie id and movie title, using the actor, film_actor and film tables. Tip: you will need to do more than one JOIN in the same query;
SELECT 
	a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS actor_name,
    fa.film_id,
    fi.title    
FROM
	actor AS a
    JOIN film_actor AS fa
    JOIN film AS fi
ON 
	a.actor_id = fa.actor_id
    AND fa.film_id = fi.film_id;
