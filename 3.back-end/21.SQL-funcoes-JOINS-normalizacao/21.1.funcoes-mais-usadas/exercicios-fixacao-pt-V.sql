USE sakila;

-- Build a query that displays:
-- The average length of the films and name the column 'Average Length';
-- The minimum length of movies as 'Minimum Length';
-- The maximum length of movies as 'Maximum Length';
-- The sum of all durations as 'Total Display Time';
-- And, finally, the total amount of movies registered in the sakila.film table as 'Registered Movies'.

SELECT
	AVG(length) AS 'Average Length',
    MIN(length) AS 'Minimum Length',
    MAX(length) AS 'Maximum Length',
    SUM(length) AS 'Total Display Time',
    COUNT(length) AS 'Registered Movies'
    FROM film;