const express = require("express");

const movies = express.Router();

movies.get("/", (req, res) => {
    res.status(200)
    .json( {success: true, data: {payload: "all the movies"}})
});

module.exports = bookmarks;