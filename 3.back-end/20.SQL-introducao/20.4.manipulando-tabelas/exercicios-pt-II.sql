USE Pixar;

-- Enter Pixar productions in the Movies table:
-- Monsters Inc., by Pete Docter, released in 2001, running 92 minutes;
-- Finding Nemo, by John Lasseter, released in 2003, running 107 minutes;
-- Brad Bird's The Incredibles, released in 2004, is 116 minutes long;
-- WALL-E, by Pete Docter, released in 2008, running 104 minutes.
INSERT INTO Movies
	(title, director, year, length_minutes)
VALUES
	('Monsters Inc.', 'Pete Docker', 2001, 92),
    ('Finding Nemo', 'John Lasseter', 2003, 107),
    ('The Incredibles', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docker', 2008, 104);

-- The movie Finding Nemo was rated 6.8, made 450 million domestically and 370 million internationally. Enter the information into the BoxOffice table;
INSERT INTO BoxOffice
	(movie_id, rating, domestic_sales, international_sales)
VALUES
	(9, 6.8, 450000000, 370000000);

-- The name of the director of the movie "Finding Nemo" is incorrect, he was directed by Andrew Staton. Correct this data using the UPDATE command;
SET SQL_SAFE_UPDATES = 0;
UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = 'Finding Nemo';

-- The movie title "Ratatouille" is incorrect in the Movies table. Also, the movie was released in 2007 and not in 2010. Please correct this data using the UPDATE command;
UPDATE Movies
SET title = 'Ratatouille', year = 2010
WHERE title = 'ratatui';

-- Insert the new classifications below in the BoxOffice table, remember that the movie_id column is a foreign key referring to the id column of the Movies table:
-- Monsters SA, rated 8.5, earned 300 million domestically and 250 million in the international market;
-- The Incredibles, rated 7.4, earned 460 million domestically and 510 million internationally;
-- WALL-E, rated 9.9, earned 290 million domestically and 280 million in the international market.
INSERT INTO BoxOffice
	(movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);

-- Delete the movie "WALL-E" from the Movies table;
SELECT id FROM Movies
WHERE title = 'WALL-E';

DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Movies
WHERE title = 'WALL-E';

-- Delete all movies directed by "Andrew Staton" from the Movies table;
SELECT id FROM Movies
WHERE director = 'Andrew Staton';

DELETE FROM BoxOffice 
WHERE movie_id = 2
OR movie_id = 9;

DELETE FROM Movies
WHERE director = 'Andrew Staton';