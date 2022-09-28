const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Campsite = require("./Campsite");
const Favorite = require("./Favorites");

//User/Comments relationship
User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

//User/Favorites relationship
User.hasOne(Favorite, {
  foreignKey: "user_id",
})

Favorite.belongsTo(User, {
  foreignKey: "user_id",
});

//Favorite/Campsite relationship
Favorite.hasMany(Campsite, {
  foreignKey: "campsite_id"
});

Campsite.belongsTo(Favorite, {
  foreignKey: "campsite_id",
});

//Post/Comments relationship
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

//User/Post relationship
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Post,
  Comment,
  Campsite,
};
