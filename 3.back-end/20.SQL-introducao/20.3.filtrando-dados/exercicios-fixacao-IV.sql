USE sakila;

-- How many payments do we have with the return date of 2005-05-25? There are multiple possible ways to find the answer;
SELECT payment_id, amount, payment_date FROM payment
WHERE payment_date LIKE '2005-05-25%';

-- How many payments were made between 01/07/2005 and 22/08/2005?
SELECT COUNT(payment_id) FROM payment
WHERE payment_date BETWEEN '2005-07-01%' AND '2005-08-22%';

-- Using the rental table, extract the date, year, month, day, hour, minute, and second from the records with rental_id = 10330. Use the rental_date column to extract the information;
SELECT
	rental_id AS 'id',
	YEAR(rental_date) AS 'year',
    MONTH(rental_date) AS 'month',
    DAY(rental_date) AS 'day',
    HOUR(rental_date) AS 'hour',
    MINUTE(rental_date) AS 'minute',
    SECOND(rental_date) AS 'second'
FROM rental
WHERE rental_id = 10330;

-- Build a query that returns all data from the payment made on 7/28/2005 from 10 pm onwards.
SELECT payment_id, customer_id, amount, payment_date FROM payment
WHERE DATE(payment_date) LIKE '2005-07-28'
AND HOUR(payment_date) >= 22;
