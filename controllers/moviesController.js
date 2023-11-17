const express = require("express");

const {
    getAllMovies,
    getOneMovie, 
    createMovie,
    deleteMovie, 
    updateMovie
} = require("../queries/movies.js");

const favoritesController = require("./favoritesController.js");

const { checkName, checkBoolean } = require("../validations/checkMovies.js");

const movies = express.Router();

movies.use("/:movie_id/favorites", favoritesController)

movies.get("/:id", async (req, res) => {
    const { id } = req.params; 
    const oneMovie = await getOneMovie(id)
    if(oneMovie){
        res.json(oneMovie)
    } else {
        res.status(404).json({ error: "Sorry Movie Not Found!"});
    }
});

movies.get("/", async (req, res) => {
    const allMovies = await getAllMovies();
    if (allMovies[0]){
    res.status(200)
    .json( { success: true, data: { payload: allMovies } });
    } else {
        res.status(500)
        .json({ success: false, data: { error: "Server Error" } });
    }
});

movies.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const createdMovie = await createMovie(req.body);
        res.json(createdMovie)
    } catch(error){
        res.status(400).json({ error: "Sorry there is an error, try again!" });
    }
});

movies.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params; 
        const deletedMovie = await deleteMovie(id); 
        if(deletedMovie){
            res.status(200).json({ success: true, payload: { data: deletedMovie } })
        } else {
            res.status(404).json("Movie not found!");
        }
    } catch(err){
        res.send(err)
    }
});

movies.put("/:id", async (req, res) => {
    const { id } = req.params; 
    const updatedMovie = await updateMovie(id, req.body);
    if(updatedMovie.id){
        res.status(200).json(updatedMovie);
    } else {
        res.status(404).json("No movie found with that ID");
    }
});

module.exports = movies;