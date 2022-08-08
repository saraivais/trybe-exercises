CREATE DATABASE IF NOT EXISTS model_exercise;

USE model_exercise;

CREATE TABLE users 
(
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    user_password VARCHAR(30) NOT NULL    
);
