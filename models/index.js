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

// Favorite to Campsite relationship
Favorite.hasOne(Campsite, {
  foreignKey: "campsite_id",
  onDelete: 'CASCADE'
});

Campsite.belongsTo(Favorite, {
  foreignKey: "campsite_id",
  onDelete: 'CASCADE'
});

// User to Comments relationship
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

//Comment/Campsite relationship
Campsite.hasMany(Favorite, {
  foreignKey: "camp_id",
  onDelete: 'CASCADE'
});

Comment.belongsTo(Campsite, {
  foreignKey: "camp_id",
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Campsite,
  Favorite,
};
