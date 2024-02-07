const db = require("../db/dbConfig.js");

const getAllFavorites = async (movie_id) => {
    try {
        const allFavorites = await db.any("SELECT * FROM favorites WHERE movie_id=$1", 
        movie_id
        );
        return allFavorites
    } catch(err) {
        return err
    }

};

const getOneFavorite = async (id) => {
    try{
        const oneFavorite = await db.one("SELECT * FROM favorites WHERE id=$1", id);
        return oneFavorite
    } catch(error){
        return error
    }
};

const deleteFavorite = async (id) => {
    try{
        const deletedFavorite = await db.one(
        "DELETE from favorites WHERE id = $1 RETURNING *",
        id
        )
        return deletedFavorite
    } catch(err){
        return err
    }
};

const createFavorite = async (movie_id, favorite) => {
    try{
        const { first_name, title, notes, rating } = favorite;
        const createdFavorite = await db.one(
        `INSERT INTO favorites (first_name, title, notes, rating, movie_id )
        VALUES
        ($1, $2, $3, $4, $5) RETURNING *
        `, 
        [first_name, title, notes, rating, movie_id]
        );
        return createdFavorite
    } catch(err){
        return err
    }
}

const updateFavorite = async (favorite) => {
    try{
        const { first_name, title, notes, rating, movie_id, id } = favorite;
        const updatedFavorite = await db.one(
            `UPDATE favorites SET
            first_name=$1, title=$2, notes=$3, rating=$4, movie_id=$5 WHERE id=$6 
            RETURNING *`,
            [first_name, title, notes, rating, movie_id, id]
        );
    return updatedFavorite
} catch(err){
    return err
}
}

module.exports = {
    getAllFavorites,
    getOneFavorite, 
    deleteFavorite, 
    createFavorite, 
    updateFavorite
}