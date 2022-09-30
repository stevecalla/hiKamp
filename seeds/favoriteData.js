const { Favorite } = require("../models");

const favoritedata = [
    {
        user_id: 1
    },
    {
        user_id: 2
    },
    {
        user_id: 3
    },
    {
        user_id: 4
    },
    {
        user_id: 5
    },
    {
        user_id: 6
    },

];

const seedFavorites = () => Favorite.bulkCreate(favoritedata);

module.exports = seedFavorites;