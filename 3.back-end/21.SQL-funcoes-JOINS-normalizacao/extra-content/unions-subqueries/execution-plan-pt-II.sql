SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id
WHERE c.last_name LIKE 'C%';