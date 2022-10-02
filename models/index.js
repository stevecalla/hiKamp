const User = require("./User");
const Comment = require("./Comment");
const Campsite = require("./Campsite");
const Favorite = require("./Favorites");


// User to Favorites relationship
User.hasMany(Favorite, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
})

Favorite.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

// // // Favorite to Campsite relationship
Campsite.hasMany(Favorite, {
  foreignKey: "campsite_id",
  onDelete: 'CASCADE'
});

Favorite.belongsTo(Campsite, {
  foreignKey: "campsite_id",
  onDelete: 'CASCADE'
});

// // User to Comments relationship
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

// // Comment to Campsite relationship
Campsite.hasMany(Comment, {
  foreignKey: "campsite_id",
  onDelete: 'CASCADE'
});

Comment.belongsTo(Campsite, {
  foreignKey: "campsite_id",
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Campsite,
  Favorite,
};
