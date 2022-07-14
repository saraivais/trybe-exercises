USE sakila;

-- Show all the details of movies that contain the word 'ace' in the name;
SELECT film_id, title, description, release_year, length FROM film
WHERE title LIKE '%ace%';

-- Show all the details of the movies whose descriptions end with 'china';
SELECT film_id, title, description, release_year, length FROM film
WHERE description LIKE '%china';

-- Show all the details of the two movies whose descriptions contain the word 'girl' and the title ends with the word 'lord';
SELECT film_id, title, description, release_year, length FROM film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

-- Show the two cases where, from the 4th character in the movie title, we have the word 'gon';
SELECT film_id, title, description, release_year, length FROM film
WHERE title LIKE '___gon%';

-- Show the only case where, from the 4th character in the movie title, there is the word 'gon' and the description contains the word 'Documentary';
SELECT film_id, title, description, release_year, length FROM film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';

-- Show the two movies whose titles either end with 'academy' or start with 'mosquito';
SELECT film_id, title, description, release_year, length FROM film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';

-- Show the six movies that contain the words 'monkey' and 'sumo' in their descriptions;
SELECT film_id, title, description, release_year, length FROM film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';