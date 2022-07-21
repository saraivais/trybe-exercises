-- A zoo needs a database to store information about its animals and stuff~

DROP SCHEMA IF EXISTS my_zoo;
CREATE SCHEMA my_zoo;
USE my_zoo;

-- manager keeper and species depend on no-one;
-- animal depends on species
-- then create the N:N tables for species/keeper and manager/keeper

CREATE TABLE managers (
	manager_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL
);
-- SELECT * FROM managers;

CREATE TABLE keepers (
	keeper_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL
);
-- SELECT * FROM keepers;

CREATE TABLE species (
	species_id INT PRIMARY KEY AUTO_INCREMENT,
    specie_name VARCHAR(70) UNIQUE NOT NULL,
    binomial_nomenclature VARCHAR(100) NOT NULL,
    location VARCHAR(30) NOT NULL
);
-- SELECT * FROM species;

CREATE TABLE animal (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    animal_name VARCHAR(30),
    sex VARCHAR(6), -- male/female
	age_in_years INT NOT NULL ,
    specie VARCHAR(70),
    FOREIGN KEY (specie) REFERENCES species (specie_name)
);
-- SELECT * FROM animal;

-- now create the N:N tables, manager/keeper & keeper/species

CREATE TABLE keeper_per_manager (
	manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES managers (manager_id),
    keeper_id INT,
    FOREIGN KEY (keeper_id) REFERENCES keepers (keeper_id)
);
-- SELECT * FROM keeper_per_manager;

CREATE TABLE species_per_keeper (
	species_id INT,
    FOREIGN KEY (species_id) REFERENCES species (species_id),
    keeper_id INT,
    FOREIGN KEY (keeper_id) REFERENCES keepers (keeper_id)
);
-- SELECT * FROM species_per_keeper;
