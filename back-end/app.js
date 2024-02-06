const express = require("express");
const cors = require("cors");

const app = express();

const movieController = require("./controllers/moviesController");
const favoritesController = require("./controllers/favoritesController");

app.use(cors()); 
app.use(express.json());

app.use("/movies", movieController);
app.use("/favorites", favoritesController);

app.get("/", (req, res) => {
    res.send("Welcome to Davon and Nicole's Favorite Movies!");
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "Page is not found"} })
});

module.exports = app; 