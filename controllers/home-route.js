const router = require("express").Router();
const { Post, User, comment } = require("../models");
const withAuth = require("../utils/auth");

// this route to render homepage

router.get("/", async (req, res) => {
  try {
        
    // find all posts by username
    
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
   
    // converts data to JSON object
    const posts = postData.map((post) => post.get({ plain: true }));
    
    // renders homepage given log in status
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
        
    res.status(500).json(err);
  }
});

// routes to post with given id
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    // find post by primary key and includes username and comments 
        const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    
    // post data to JSON object
    const post = postData.get({ plain: true });
    
    // render post page given login status
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//render dashboard with users posts

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["username"] }],
    });
    // post data to JSON object
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render login page

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// render signup page

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});


// render new post page

router.get("/newpost", (req, res) => {
  if (req.session.logged_in) {
    res.render("newpost");
    return;
  }
  res.redirect("/login");
});


// render the edit post page

router.get("/editpost/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("editpost", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;