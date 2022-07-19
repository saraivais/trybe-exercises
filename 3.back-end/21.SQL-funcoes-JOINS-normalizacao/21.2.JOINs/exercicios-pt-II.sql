USE Pixar;

-- Exercise 1: Using INNER JOIN, find the national (domestic_sales) and international (international_sales) sales of each movie;
SELECT
	m.id,
	m.title,
	b.domestic_sales,
    b.international_sales
FROM 
	box_office AS b
    INNER JOIN movies AS m
		ON b.movie_id = m.id;

-- Exercise 2: Using INNER JOIN, do a search that returns the number of sales for each movie that has a higher number of international sales (international_sales) than national sales (domestic_sales);
SELECT 
	m.id,
    m.title,
    b.international_sales,
    b.domestic_sales
FROM
	box_office AS b
    INNER JOIN movies AS m
		ON b.movie_id = m.id
	WHERE 
		b.international_sales > b.domestic_sales;

-- Exercise 3: Using INNER JOIN, perform a search that returns the films and their rating in descending order;
SELECT 
	m.title,
    b.rating
FROM
	box_office AS b
    INNER JOIN movies AS m
		ON b.movie_id = m.id
	ORDER BY b.rating DESC;

-- Exercise 4: Using the LEFT JOIN, perform a search that returns all the data from the cinemas, even those that do not have movies in theaters and, additionally, the data of the movies that are showing in these theaters. Return the names of theaters in alphabetical order;
SELECT
	t.name,
    t.location,
    m.title,
	m.director,
    m.year,
    m.length_minutes
FROM
	theater AS t
    LEFT JOIN movies AS m
		ON t.id = m.theater_id
	ORDER BY t.name ASC;

-- Exercise 5: Using the RIGHT JOIN, perform a search that returns all the data of the movies, even those that are not showing and, additionally, the data of the cinemas that have these movies in theaters. Return the names of theaters in alphabetical order;
SELECT
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    t.name,
    t.location
FROM
	movies AS m
    RIGHT JOIN theater AS t
		ON m.theater_id = t.id;
