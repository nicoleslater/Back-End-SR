DROP DATABASE IF EXISTS movies_dev;

CREATE DATABASE filmhunters_dev;

\c filmhunters_dev;

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

-- CREATE TABLE favorites (
--     id SERIAL PRIMARY KEY, 
--     reccomend BOOLEAN,
--     personal_rating NUMERIC,
--     CHECK (rating >= 0 AND rating <= 5),
--     movie_id INTEGER REFERENCES movies(id) 
--     ON DELETE CASCADE
-- )