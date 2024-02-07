const db = require("../back-end/db/dbConfig.js");

const getAllMovies = async () => {
    try {
        const allMovies = await db.any("SELECT * FROM movies");
        return allMovies
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
        const createdMovie = await db.one("INSERT INTO movies (title, released, director, genre, rated, dvd, imdb_Ratings) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [movie.title, movie.released, movie.director, movie.genre, movie.rated, movie.dvd, movie.imdb_Ratings])
        return createdMovie
    } catch(error){
        return error 
    }
};

const deleteMovie = async (id) => {
    try{
        const deletedMovie = await db.one(
            "DELETE from movies WHERE id = $1 RETURNING * ",
            id
        )
        return deletedMovie
    } catch(error){
        return error
    }
};

const updateMovie = async (id, movie) => {
    try {
        const { title, released, director, genre, rated, dvd, imdb_Ratings } = movie;
        const updatedMovie = await db.one(
            "UPDATE movies SET title=$1, released=$2, director=$3, genre=$4, rated=$5, dvd=$6, imdb_Ratings=$7 RETURNING *", 
            [title, released, director, genre, rated, dvd, imdb_Ratings, id]
        );
        return updatedMovie
    } catch (err){
        return err
    }
};

module.exports = { 
    getAllMovies,
    getOneMovie, 
    createMovie,
    deleteMovie, 
    updateMovie
}