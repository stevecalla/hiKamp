const User = require("./User");
const Comment = require("./Comment");
const Campsite = require("./Campsite");
const Favorite = require("./Favorites");

//User/Comments relationship
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

//User/Favorites relationship
User.hasMany(Favorite, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
})

Favorite.belongsTo(User, {
  foreignKey: "user_id",
});

//Favorite/Campsite relationship
Favorite.hasOne(Campsite, {
  foreignKey: "favorite_id"
});

Campsite.belongsTo(Favorite, {
  foreignKey: "favorite_id",
});

//Comment/Campsite relationship
Campsite.hasMany(Favorite, {
  foreignKey: "camp_id",
});

Comment.belongsTo(Campsite, {
  foreignKey: "camp_id"
});



module.exports = {
  User,
  Comment,
  Campsite,
  Favorite,
};
