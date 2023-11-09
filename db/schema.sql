DROP DATABASE IF EXISTS movies_dev;

CREATE DATABASE movies_dev;

\c movies_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    released DATE, 
    director TEXT,
    genre TEXT, 
    rated TEXT, 
    imdb_ID NUMERIC,
    is_favorite DEFAULT BOOLEAN, 
    imdbRatings NUMERIC
);