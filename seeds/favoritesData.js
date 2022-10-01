const { Favorite } = require("../models");

const favoritesData = [
  {
    user_id: 2,
    campsite_id: 50,
  },
  {
    user_id: 2,
    campsite_id: 300,
  },
  {
    user_id: 3,
    campsite_id: 1,
  },
  {
    user_id: 10,
    campsite_id: 500,
  },
  {
    user_id: 2,
    campsite_id: 400,
  },
  {
    user_id: 7,
    campsite_id: 10,
  },
  {
    user_id: 9,
    campsite_id: 152,
  },
  {
    user_id: 5,
    campsite_id: 10,
  },
  {
    user_id: 4,
    campsite_id: 444,
  },
];

const seedFavorite = () => Favorite.bulkCreate(favoritesData);

module.exports = seedFavorite;
