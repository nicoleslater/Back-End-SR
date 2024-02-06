DROP DATABASE IF EXISTS filmhunters_dev;

CREATE DATABASE filmhunters_dev;

\c filmhunters_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    released DATE, 
    director TEXT,
    genre TEXT, 
    rated TEXT, 
    dvd BOOLEAN, 
    imdb_Ratings INT
);

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    first_name TEXT, 
    title TEXT,
    notes TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    movie_id INTEGER REFERENCES movies(id) 
    ON DELETE CASCADE
);