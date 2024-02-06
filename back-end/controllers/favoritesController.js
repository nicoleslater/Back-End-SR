const express = require("express");

const favorites = express.Router({ mergeParams: true });

const { getOneMovie } = require("../queries/movies.js");

const {
    getAllFavorites,
    getOneFavorite, 
    deleteFavorite, 
    createFavorite, 
    updateFavorite
} = require("../queries/favorites.js");


favorites.get("/", async (req, res) => {
    const { movie_id } = req.params;
    try {
        const movie = await getOneMovie(movie_id);
        const allFavorites = await getAllFavorites(movie_id);
        res.json({...movie, allFavorites});
    } catch(err){
        res.json(err);
    }
});

favorites.get("/:favorite_id", async (req, res) => {
    const { favorite_id, movie_id } = req.params;
    try{
        const favorite = await getOneFavorite(favorite_id);
        const movie = await getOneMovie(movie_id);
        if(favorite.id){
            res.json({ ...movie, favorite });
        }
    } catch(err){
        res.json(err);
    }
});

favorites.post("/", async (req, res) => {
    try{
        const { movie_id } = req.params;
        const createdFavorite = await createFavorite(movie_id, req.body)
        res.json(createdFavorite);
    } catch(err){
        res.status(400).json( { error: "Huge Error!"})
    }
});

favorites.delete("/:favorite_id", async (req, res) => {
    try{
        const { favorite_id } = req.params; 
        const deletedFavorite = await deleteFavorite(favorite_id);

        if(deletedFavorite){
            res.status(200).json({
                success: true,
                payload: {
                    data: deletedFavorite,
                },
            });
        } else {
            res.status(404).json("Sorry no favorite found");
        }
    } catch(err){
        res.send(err);
    }
});


favorites.put("/:id", async (req, res) => {
    const { id, movie_id} = req.params;
    const updatedFavorite = await updateFavorite( {movie_id, id, ...req.body });

    if(updatedFavorite.id){
        res.status(200).json(updatedFavorite)
    } else {
        res.status(404).json("Favorite is not here")
    }
});

module.exports = favorites;






