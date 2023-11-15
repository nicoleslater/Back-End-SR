const express = require("express");

const favorites = express.Router();

const { getOneMovie } = require("../queries/movies");

const {
    getAllFavorites,
    getOneFavorite, 
    deleteFavorite, 
    createFavorite, 
    updateFavorite
} = require("../queries/favorites");

