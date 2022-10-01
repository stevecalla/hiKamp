const sequelize = require("../config/connection");
const seedComments = require("./commentData");
const seedUsers = require("./userData");
const seedCampsites = require("./campsiteData");
const seedFavorites = require("./favoritesData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedCampsites();

  await seedComments();

  await seedFavorites();

  process.exit(0);
};

seedAll();
