SELECT * FROM sakila.film;
SELECT title, description, release_year FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

SELECT * FROM sakila.actor
ORDER BY last_name ASC, first_name DESC;

SELECT * FROM sakila.language;
SELECT * FROM sakila.language
ORDER BY language_id ASC LIMIT 5 OFFSET 1;

SELECT * FROM sakila.film;
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC LIMIT 20;