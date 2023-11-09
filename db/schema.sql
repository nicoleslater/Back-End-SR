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
    is_favorite BOOLEAN, 
    imdb_Ratings INT
);

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY, 
    movie_ID INT, 
    imdb_id
)