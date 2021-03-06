const express = require("express");
const router = express.Router();
const { Post, User } = require("../../database/models/index");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../../utils");

router.get("/", authenticateToken, async (req, res, next) => {
  try {
    const post = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    if (post) {
      res.status(200).send(post);
    } 
    else {
      res.status(401).send();
    }
  } catch (error) {
    res.status(404).send("No Posts");
  }
});

router.post("/", authenticateToken, async (req, res, next) => {
  try {
    const newPost = await Post.create({
      userId: req.userId.id,
      caption: req.body.caption,
    })

    const createdPost = await Post.findOne({
      where: {
        id: newPost.id
      },
      include: User
    })
    
    res.status(201).send(createdPost)

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
