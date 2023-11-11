DROP DATABASE IF EXISTS movies_dev;

CREATE DATABASE movies_dev;

\c movies_dev;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    url TEXT,
    released DATE NOT NULL, 
    director TEXT,
    genre TEXT, 
    rated TEXT DEFAULT 'NR', 
    is_favorite BOOLEAN DEFAULT FALSE, 
    imdb_Ratings INTEGER DEFAULT 0
);

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY, 
    notes TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    movie_id INTEGER REFERENCES movies(id) 
    ON DELETE CASCADE
)