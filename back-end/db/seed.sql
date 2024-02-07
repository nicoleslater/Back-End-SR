\c filmhunters_dev;

INSERT INTO movies (title, released, director, genre, rated, dvd, imdb_Ratings)
VALUES 
('Rush Hour', '1998-09-18','Brett Ratner', 'Action', 'PG-13', true, 7),
('Waiting to Exhale', '1995-12-22', 'Forest Whitaker', 'Comedy Drama', 'R', true, 9),
('Kill Bill: Volume 1', '2003-10-10', 'Quentin Tarantino', 'Action', 'R', true, 8.2), 
('Sharknado', '2013-07-11', 'Anthony C. Ferrante', 'Action', 'Not Rated', false, 3.3);


INSERT INTO favorites (first_name, title, notes, rating)
VALUES 
('Kim', 'Rush Hour', 'I love Chris Tucker! Great Movie!', 5),
('Tisha', 'Waiting to Exhale', 'I love watching Whitney on the screen!', 5), 
('Caleb', 'Kill Bill: Volume 1', 'Ready for the Sequel!', 5), 
('John', 'Sharknado', 'Too cheesy!', 3);
