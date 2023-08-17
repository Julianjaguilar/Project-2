// import seed data
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

const sequelize = require("../config/connection");


// seed data by running seeds 
const seedAll = async () => {
    
  // sync models and wipe out tables
  await sequelize.sync({ force: true });
  
  // seed functions
  await seedUsers();
  await seedPosts();
  await seedComments();
 
  process.exit(0);
};

seedAll();