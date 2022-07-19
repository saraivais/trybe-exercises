USE sakila;

-- Build a query that displays the number of customers registered in the sakila.customer table that are active and the number that are inactive.
SELECT COUNT(*), active FROM customer
GROUP BY active;

-- Build a query for the sakila.customer table that displays the number of active and inactive customers per store. The results must contain the store ID, the status of customers (active or inactive) and the number of customers by status.
SELECT store_id, active, COUNT(*) FROM customer
GROUP BY store_id, active;
-- modo de agregação~ only_full_group_by~
-- Mentoria~ pq tem que agrupar pelos dois?
-- Error Code: 1055. Expression #2 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'sakila.customer.active' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by

-- Build a query that displays the average rental duration by rating (rating) of the movies registered in the sakila.film table. Results should be grouped by rating and ordered from highest to lowest average.
SELECT AVG(length), rating FROM film
GROUP BY rating
ORDER BY AVG(length) DESC;

-- Build a query for the sakila.address table that displays the name of the district and the number of addresses registered in it. Results should be sorted from highest to lowest.
SELECT COUNT(*) AS 'address quantity', district FROM address
GROUP BY district
ORDER BY COUNT(*) DESC;
