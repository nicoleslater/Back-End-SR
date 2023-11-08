const express = require("express");
const cors = require("cors");

const app = express();

const movieController = require("./controllers/movieController");

app.use(cors()); 
app.use(express.json());

app.use("/movies", movies)
app.get("/", (req, res) => {
    res.send("Welcome to FilmHunters")
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "page not found"} })
});

module.exports = app; 