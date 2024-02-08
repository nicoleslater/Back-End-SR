\c filmhunters_dev;

INSERT INTO movies (title, released, director, genre, rated, dvd, imdb_Ratings)
VALUES 
('Rush Hour', '1998-09-18','Brett Ratner', 'Action', 'PG-13', true, 7),
('Waiting to Exhale', '1995-12-22', 'Forest Whitaker', 'Comedy Drama', 'R', true, 9),
('Kill Bill: Volume 1', '2003-10-10', 'Quentin Tarantino', 'Action', 'R', true, 8.2), 
('Sharknado', '2013-07-11', 'Anthony C. Ferrante', 'Action', 'Not Rated', false, 3.3),
('The Dark Knight', '2008-07-18', 'Christopher Nolan', 'Action Crime Drama', 'PG-13', true, 9),
('Inception', '2010-07-16', 'Christopher Nolan', 'Action Adventure Sci-Fi', 'PG-13', true, 8.8),
('Pulp Fiction', '1994-10-14', 'Quentin Tarantino', 'Crime Drama', 'R', true, 8.9),
('The Godfather', '1972-03-24', 'Francis Ford Coppola', 'Crime Drama', 'R', true, 9.2);


INSERT INTO favorites (movie_id, first_name, title, notes, rating)
VALUES 
(1, 'Kim', 'Rush Hour', 'I love Chris Tucker! Great Movie!', 5),
(2, 'Tisha', 'Waiting to Exhale', 'I love watching Whitney on the screen!', 5), 
(3, 'Caleb', 'Kill Bill: Volume 1', 'Ready for the Sequel!', 5), 
(4, 'John', 'Sharknado', 'Too cheesy!', 3),
(5, 'Michael', 'The Dark Knight', 'One of the best superhero movies!', 5),
(6, 'Sarah', 'Inception', 'Mind-bending plot!', 4),
(7, 'David', 'Pulp Fiction', 'Quentin Tarantino masterpiece!', 5),
(8, 'Emily', 'The Godfather', 'Classic mafia movie!', 5);