const express = require("express");
const cors = require("cors");

const app = express();

const moviesController = require("./controllers/movieController");

app.use(cors()); 
app.use(express.json());

app.use("/movies", moviesController);

app.get("/", (req, res) => {
    res.send("Welcome to Davon and Nicole's Favorite Movies!");
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "Page is not found"} })
});

module.exports = app; 