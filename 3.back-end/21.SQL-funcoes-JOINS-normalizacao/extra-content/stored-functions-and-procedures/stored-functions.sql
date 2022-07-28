USE sakila;

-- Using the sakila.payment table, build a function that returns the total amount of payments made so far by a given customer_id;
DELIMITER $$

CREATE FUNCTION GetAmountOfPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE amountOfPayments INT;
    SELECT COUNT(payment_id)
    FROM sakila.payment
    WHERE customer_id = id
    INTO amountOfPayments;
    RETURN amountOfPayments;
END $$

DELIMITER ;

SELECT GetAmountOfPayments(1);

-- Create a function that, given the inventory_id input parameter, returns the name of the movie linked to the inventory record with that id;
DELIMITER $$

CREATE FUNCTION ReturnMovieId(inventoryId INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE movieId INT;
    SELECT film_id
    FROM sakila.inventory
    WHERE inventory_id = inventoryId
    INTO movieId;
    RETURN movieId;
END $$

DELIMITER ;

SELECT ReturnMovieId(8);

-- Create a function that receives a given movie category in text format (eg 'Action', 'Horror') and returns the total amount of movies registered in that category;
SELECT * FROM film_category;
SELECT * FROM category;

DELIMITER $$

CREATE FUNCTION ReturnAmountOfMoviesPerGenre(cat VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE movieQuantity INT;
    SELECT COUNT(fc.film_id) FROM
		film_category AS fc
		INNER JOIN category AS c
			ON fc.category_id = c.category_id
		WHERE c.name = cat
        INTO movieQuantity;
	RETURN movieQuantity;
END $$

DELIMITER ;

SELECT ReturnAmountOfMoviesPerGenre('Action');

-- SELECT COUNT(fc.film_id) FROM
-- 	film_category AS fc
--     INNER JOIN category AS c
-- 		ON fc.category_id = c.category_id
-- 	WHERE c.name = 'Action';
