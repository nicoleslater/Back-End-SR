DROP DATABASE IF EXISTS filmhunters_dev;
CREATE DATABASE filmhunters_dev;

\c filmhunters_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    url VARCHAR,
    released DATE, 
    director TEXT,
    genre TEXT, 
    rated TEXT, 
    is_favorite BOOLEAN, 
    imdb_Ratings INT
);

