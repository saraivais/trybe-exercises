USE sakila;

-- Set up a procedure that displays the 10 most popular actors, based on their number of movies. This procedure must not receive input or output parameters and, when called, must display the id of the actor or actress and the number of films in which they acted;
DELIMITER $$

CREATE PROCEDURE ShowTenMostAppearingActors() 
BEGIN
	SELECT actor_id, COUNT(film_id) AS number_films FROM film_actor
	GROUP BY actor_id ORDER BY number_films DESC
	LIMIT 10;
END $$

DELIMITER ;

CALL ShowTenMostAppearingActors;

-- Create a procedure that receives as input parameter the name of the desired category in a string and that displays the id of the movie, its title, the id of its category and the name of the selected category. Use the film, film_category and category tables to assemble this procedure;
DELIMITER $$

CREATE PROCEDURE retrieveMovieStatsByName(INOUT film_stats VARCHAR(300))
BEGIN
	SELECT CONCAT('O filme de id ', fi.film_id, ' tem nome ', fi.title, 'e é da categoria ', c.name, ' que tem id ', fc.category_id)
		INTO film_stats
    FROM film AS fi
	INNER JOIN film_category AS fc
		ON fi.film_id = fc.film_id
	INNER JOIN category AS c
		ON fc.category_id = c.category_id
	WHERE fi.title = film_stats;
END $$

DELIMITER ;

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL retrieveMovieStatsByName(@movie_title);
SELECT @movie_title;

-- Set up a procedure that receives a customer's email as an input parameter and says whether or not the customer is active, through an output parameter;
SELECT * FROM customer;
DESCRIBE $$

CREATE PROCEDURE verifyIfCustoemrIsActive(
	INOUT userEmail VARCHAR(300),
    OUT userActivity VARCHAR(200)
)
BEGIN
	SELECT CONCAT('O usuario esta ', active, ' ativo')
		INTO userActivity
    FROM customer
    WHERE email = userInfo
END $$

DELIMITER ;
-- cant do this idk why

