const { Favorite } = require("../models");

const favoritesData = [
  {
    user_id: 1,
    campsite_id: 1,
  },
  {
    user_id: 1,
    campsite_id: 1,
  },
  {
    user_id: 1,
    campsite_id: 1,
  },
  {
    user_id: 1,
    campsite_id: 1,
  },
  {
    user_id: 1,
    campsite_id: 1,
  },
  {
    user_id: 1,
    campsite_id: 1,
  },
  {
    user_id: 1,
    campsite_id: 1,
  },
  {
    user_id: 1,
    campsite_id: 1,
  },
  {
    user_id: 1,
    campsite_id: 1,
  },
];

const seedFavorite = () => Favorite.bulkCreate(favoritesData);

module.exports = seedFavorite;
