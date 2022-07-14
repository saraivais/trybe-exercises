USE sakila;

-- How, then, would you go about finding, using IN, all the details about the rent for customers with the following ids: 269, 239, 126, 399, 142? The information can be found in the payment table;
SELECT customer_id, payment_id, staff_id, rental_id, amount FROM payment
WHERE customer_id IN (269, 239, 126, 399, 142);

-- How would you find all the information about addresses that are registered in the districts of QLD, Nagasaki, California, Attika, Mandalay, Nantou and Texas? The information can be found in the address table;
SELECT address_id, address, district, city_id, postal_code FROM address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

-- Show the customer's first name, last name and email with the following last names: hicks, crawford, henry, boyd, mason, morales and kennedy, sorted by name in alphabetical order;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY last_name ASC;

-- Show customers' email addresses with address_id 172, 173, 174, 175 and 176, sorted alphabetically;
SELECT email, address_id FROM customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email ASC;

-- Find out how many payments were made between 01/05/2005 and 01/08/2005. Remember that, in the database, the dates are stored in the year/month/day format, different from the Brazilian format, which is day/month/year;
SELECT COUNT(payment_id) FROM payment
WHERE payment_date
BETWEEN '2005-05-01' AND '2005-08-01';

-- Show the title, year of release, and loan duration of all movies with loan durations 3 through 6. Results should be sorted into movies with longer loan durations first. In case of a tie, sort alphabetically by title;
SELECT film_id, title, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

-- Assemble a report that displays the title and rating of the top 500 movies targeting G, PG, and PG-13 ratings. Results must be sorted by title;
SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title ASC
LIMIT 500;

