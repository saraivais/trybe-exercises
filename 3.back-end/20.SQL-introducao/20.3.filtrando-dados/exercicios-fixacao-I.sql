USE sakila;

-- Select data of customer whose email is 'LEONARD.SCHOFIELD@sakilacustomer.org' from customer table;
SELECT customer_id, store_id, first_name, last_name, email FROM customer
WHERE email LIKE 'LEONARD.%';

-- We need a report of customer names, in alphabetical order, that are no longer active in our system and belong to the store with id = 2, and don't include customer KENNETH in the result;
SELECT customer_id, store_id, CONCAT(first_name, ' ', last_name) AS customer_name, email, active FROM customer
WHERE active IS NOT TRUE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name ASC;

-- The financial sector wants to know the title, description, year of release and replacement cost value of the 100 films with the highest replacement cost, from the highest to the lowest, among films made for minors and that have a minimum replacement cost of $18.00 USD. In case of a tie, sort alphabetically by title. The information can be found in the film table;
-- G, PG, PG-13;
SELECT title, description, release_year, replacement_cost, rating FROM film
WHERE replacement_cost > 18.00
AND (rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13')
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

-- How many customers are active and in store 1? The information can be found in the customer table;
SELECT COUNT(active) FROM customer
WHERE active IS TRUE
AND	 store_id = 1;

-- Show all the details of the customers who are not active in the store 1. The information can be found in the customer table;
SELECT customer_id, store_id, first_name, last_name, email, address_id, active FROM customer
WHERE active IS NOT TRUE
AND store_id = 1;

-- We need to find out which are the 50 adult-only movies with the lowest rental rate so we can better promote those movies. In case of a tie, sort alphabetically by title. The information can be found in the film table;
-- NC-17;
SELECT film_id, title, description, release_year, rental_rate, rating FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC
LIMIT 50;

