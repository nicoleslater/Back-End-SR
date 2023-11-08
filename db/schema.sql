DROP DATABASE IF EXISTS movies_dev;

CREATE DATABASE movies_dev;

\c movies_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    released DATE, 
    genre TEXT, 
    rated TEXT, 
    director TEXT,
    availableOnDVD DEFAULT BOOLEAN, 
    ratings NUMERIC
)