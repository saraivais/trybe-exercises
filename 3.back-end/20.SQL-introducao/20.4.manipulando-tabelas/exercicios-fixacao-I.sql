USE sakila;

-- Insert a new employee into the sakila.staff table;
-- To find out which fields are required, right-click the sakila.staff table and select Table Inspector. Click on the columns tab and check which fields accept nulls to guide you. Remember that values ​​that are generated automatically do not need to be entered manually;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username)
VALUES ('John', 'Doe', 42, 'johndoe@email.com', 2, 1, 'johndoe');

-- Having done the previous exercise, let's now go to level 2. Insert two new employees in just one query;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username)
VALUES
('Tony', 'Stark', 42, 'tstark@email.com', 2, 1, 'ironman'),
('Pepper', 'Potts', 42, 'ppotts@email.com', 2, 1, 'pepper');

-- Select the first five first and last names from the sakila.customer table and register these people as actors in the sakila.actor table;
INSERT INTO actor (first_name, last_name) 
	SELECT customer.first_name, customer.last_name 
    FROM customer
    WHERE customer.customer_id < 6
    ORDER BY customer.customer_id;
    
-- Register three categories at once in the sakila.category table;
INSERT INTO category (name)
VALUES
	('Asian'),
    ('K-Drama'),
    ('Slice of Life');



-- Register a new store in the sakila.store table;

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sakila`.`staff`, CONSTRAINT `fk_staff_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE)

-- 0 row(s) affected, 1 warning(s): 1452 Cannot add or update a child row: a foreign key constraint fails (`sakila`.`store`, CONSTRAINT `fk_store_staff` FOREIGN KEY (`manager_staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE)

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sakila`.`staff`, CONSTRAINT `fk_staff_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE)

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sakila`.`store`, CONSTRAINT `fk_store_staff` FOREIGN KEY (`manager_staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE);

-- Error Code: 1062. Duplicate entry '2' for key 'store.idx_unique_manager';