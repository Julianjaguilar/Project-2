// Import the all  models
const User = require("./User");
const Post = require("./post");
const comment = require("./comment");

// lets define the relationships between  models

User.hasMany(Post, {
  
    foreignKey: "user_id", 
});

Post.belongsTo(User, {
  
    foreignKey: "user_id", 
});

comment.belongsTo(User, {
  
    foreignKey: "user_id", 
});

comment.belongsTo(Post, {
 
    foreignKey: "post_id", 
});

Post.hasMany(comment, {
  foreignKey: "post_id", 
});

User.hasMany(comment, {
  foreignKey: "user_id",
});

// Export the models

module.exports = { User, Post, comment };