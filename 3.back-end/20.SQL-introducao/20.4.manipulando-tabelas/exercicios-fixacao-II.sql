USE sakila;

-- Update all rows in the sakila.actor table that have the first name "JULIA" to "JULES";
SELECT * FROM actor;
SET SQL_SAFE_UPDATES = 0;
UPDATE actor
	SET first_name = 'JULES'
    WHERE first_name = 'JULIA';

-- Change the category table row where the value of column x equals "Sci-fi" to "Science Fiction";
SELECT * FROM category;
UPDATE category
	SET name = 'Science Fiction'
    WHERE name = 'Sci-Fi';

-- Adjust to $25 the rental value for movies that are longer than 100 minutes and have a "G", "PG" or "PG-13" rating and a replacement cost greater than $20;
UPDATE film
	SET replacement_cost = 25
	WHERE length < 100
    AND rating IN ('G', 'PG', 'PG-13')
    AND replacement_cost > 20;
    
-- SELECT * FROM film
-- 	WHERE length < 100
--     AND rating IN ('G', 'PG', 'PG-13')
--     AND replacement_cost > 20;

-- Now, the rent for movies lasting between 0 and 100 minutes will be $10 and the rent for movies longer than 100 minutes will be $20;
-- SELECT COUNT(length), length FROM film
-- 	GROUP BY length;
UPDATE film
	SET replacement_cost = 
		CASE WHEN length < 100 THEN 10
			ELSE 20
		END;