USE Pixar;

SET SQL_SAFE_UPDATES = 0;

-- Change the BoxOffice table rating to 9.0 of all movies that grossed over 400 million domestically;
UPDATE BoxOffice
	SET rating = 9.0
    WHERE domestic_sales > 400000000;

-- Change the BoxOffice table rating to 6.0 of all movies that grossed less than 300 million in the international market and more than 200 million in the domestic market;
UPDATE BoxOffice 
	SET rating = 6.0
    WHERE (international_sales < 300000000 AND domestic_sales > 200000000);

-- Delete all movies less than 100 minutes in length from the Movies table;
DELETE FROM BoxOffice
	WHERE movie_id IN (SELECT id FROM Movies
		WHERE length_minutes < 100);

DELETE FROM Movies
WHERE length_minutes < 100;