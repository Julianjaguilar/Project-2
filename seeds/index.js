// Importing the seed data functions
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

// this will Import  sequelize connection from ../config/connection
const sequelize = require("../config/connection");


// This Function to seed all data by calling the three seed functions in sequence
const seedAll = async () => {
    
  // this synchronize the sequelize models and wiping out the tables
  await sequelize.sync({ force: true });
  
  // thi call all fuction for seeds
  await seedUsers();
  await seedPosts();
  await seedComments();
 
  process.exit(0);
};

// Calling the seedAll function to seed the database
seedAll();