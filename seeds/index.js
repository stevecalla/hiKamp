const sequelize = require("../config/connection");
const seedPosts = require("./postData");
const seedComments = require("./commentData");
const seedUsers = require("./userData");
const seedCampsites = require("./campsiteData");
const seedFavorites = require("./favoriteData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedCampsites();

  await seedPosts();

  await seedComments();

  await seedFavorites();



  process.exit(0);
};

seedAll();
