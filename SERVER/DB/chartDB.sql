CREATE DATABASE chart;

CREATE TABLE cliente( 
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(60),
    opinion VARCHAR(100)
);
