\c filmhunters_dev;

INSERT INTO movies (title, released, director, genre, rated, is_favorite, imdb_Ratings)
VALUES 
('Rush Hour', '1998-09-18','Brett Ratner', 'Action', 'PG-13', true, 7),
('Kill Bill: Volume 1', '2003-10-10', 'Quentin Tarantino', 'Action', 'R', true, 8.2), 
('Sharknado', '2013-07-11', 'Anthony C. Ferrante', 'Action', 'Not Rated', false, 3.3);


INSERT INTO favorites (first_name, title, notes, rating, movie_id)
VALUES 
('Kim', 'Rush Hour', 'I love Chris Tucker! Great Movie!', 5, 1), 
('Caleb', 'Kill Bill: Volume 1', 'Ready for the Sequel!', 5, 2), 
('John', 'Sharknado', 'Too cheesy!', 1, 3);
