USE sakila;

-- Return first_name from actor table, with no repetitions and in descending order;
SELECT DISTINCT first_name FROM actor
ORDER BY first_name DESC;

-- How many surnames unique surnames exists in actor table;
SELECT COUNT(DISTINCT last_name) FROM actor;

-- Select the first 50 cities from 'Angra dos Reis';
SELECT city_id, city, country_id FROM city
LIMIT 50 OFFSET 25;
-- SELECT POSITION('Angra dos Reis' IN city) FROM city; ~doesnt work :(

-- Select 25 films from APOLLO TEEN ordered decreasingly by length;
SELECT film_id FROM film
WHERE title = 'APOLLO TEEN';

SELECT film_id, title, description, length FROM film
ORDER BY length DESC
LIMIT 25
OFFSET 33;

-- Select 30 actors w/ first & last name from ZERO CAGE, sorted by last_name in decreasing order~
SELECT actor_id FROM actor
WHERE first_name = 'ZERO'
AND last_name = 'CAGE';

SELECT CONCAT(first_name, ' ', last_name) FROM actor
ORDER BY last_name DESC
LIMIT 30
OFFSET 11;
