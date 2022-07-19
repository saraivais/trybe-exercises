USE sakila;

-- Using the IF in the sakila.film table, display the movie id, the title and an extra column called 'do I know the movie?', where you must evaluate if the movie name is 'ACE GOLDFINGER'. If so, display "I've watched this movie." Otherwise, display "I don't know the movie". Don't forget to use an alias to rename the conditional column;
SELECT IF (title = 'ACE GOLDFINGER', "I've watched this movie", "I don't know the movie") FROM film;

-- Using the CASE in the sakila.film table, display the title, the rating and an extra column that we will call the 'target audience' in which we will place the film's rating according to the following acronyms:
-- G: "Free for all";
-- PG: "Not recommended for children under 10";
-- PG-13: "Not recommended for children under 13";
-- A: "Not recommended for children under 17";
-- If it doesn't fall under any of the above classifications: "Prohibited for minors".
SELECT title, rating, CASE
	WHEN rating = 'G' THEN 'Free for all'
    WHEN rating = 'PG' THEN 'Not recommended for children under 10'
    WHEN rating = 'PG-13' THEN 'Not recommended for children under 13'
    WHEN rating = 'A' THEN 'Not recommended for children under 17'
    ELSE 'Prohibited for minors'
    END AS 'target_audience'
    FROM film;
    