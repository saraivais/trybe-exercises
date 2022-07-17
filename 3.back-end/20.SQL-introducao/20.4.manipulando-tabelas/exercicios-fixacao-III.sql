USE sakila;

SET SQL_SAFE_UPDATES = 0;

-- Delete the actor named "KARL" from the database;
DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE actor_id = 12;

-- Delete the actors named "MATTHEW" from the database;
SELECT * FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- Delete from the film_text table all records that have the word "saga" in their descriptions;
DELETE FROM film_text
WHERE description LIKE '%saga%';

-- Delete all records from the film_actor and film_category tables as efficiently as possible;
TRUNCATE film_actor;
TRUNCATE film_category;

-- Inspect all tables in the sakila database and review which ON DELETE restrictions have been imposed on each. Use the Table Inspector to do this (DDL tab);
-- Delete the database and recreate it (use the instructions at the beginning of this lesson);