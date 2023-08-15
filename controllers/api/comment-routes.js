// This Import all required modules
const router = require("express").Router();
const { comment } = require("../../models");
const withAuth = require("../../utils/auth");
// this create a new comment
router.post("/", withAuth, async (req, res) => {
  try {    
    const newComment = await comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
// this Export the router
module.exports = router;