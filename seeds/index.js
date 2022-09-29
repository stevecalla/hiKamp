const sequelize = require("../config/connection");
const seedPosts = require("./postData");
const seedComments = require("./commentData");
const seedUsers = require("./userData");
const seedCampsites = require("./campsiteData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  // await seedPosts();

  // await seedComments();

  await seedCampsites();

  process.exit(0);
};

seedAll();
