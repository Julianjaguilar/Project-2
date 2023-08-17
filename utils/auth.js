// middleware to check if they are logged in

const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

// Exporting withAuth middleware function

module.exports = withAuth;