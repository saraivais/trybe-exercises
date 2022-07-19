USE Pixar;

-- Exercise 6: Using the INNER JOIN, select all the information of the movies that are showing (they have theater_id different from NULL) with a rating greater than 8;
SELECT * FROM movies;
SELECT * FROM theater;
SELECT * FROM box_office;

SELECT
	m.id,
    m.title,
    m.director,
    m.year,
    b.rating
FROM
	movies AS m
    INNER JOIN box_office AS b
    ON b.movie_id = m.id
WHERE b.rating > 8
AND m.theater_id IS NOT NULL;