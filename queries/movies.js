const db = require("../db/dbConfig");

const getAllMovies = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM movies");
        return allSongs
    } catch(err){
        return err
    }
};

const getOneMovie = async (id) => {
    try {
        const oneMovie = await db.one("SELECT * FROM movies WHERE id=$1", id)
        return oneMovie
    } catch(error){
        return error
    }
};

const createMovie = async (movie) => {
    try {
        const createdMovie = await db.one("INSERT INTO movies (title, released, director, genre, rated, is_favorite, imdb_Ratings) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ". [movie.title, movie.released, movie.director, movie.genre, movie.is_favorite, movie.imdb_Ratings])
    }
}