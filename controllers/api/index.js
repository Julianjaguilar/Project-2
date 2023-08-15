// This Import all required modules

const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// Lets Set up  routes for user,post and comment.

router.use("/users", userRoutes); 
router.use("/posts", postRoutes); 
router.use("/comments", commentRoutes); 

// Export the router

module.exports = router;
