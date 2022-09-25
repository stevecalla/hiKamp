const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const isAuthorized = require("../utils/auth");

// REDIRECT TO HOME PAGE AFTER LOGIN
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// REDIRECT TO HOMEPAGE AFTER NEW USER IS CREATED / SIGNED UP
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User }],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// RENDER POSTS WITH COMMENTS & COMMENT TEXT AREA
router.get("/post/:id", isAuthorized, async (req, res) => {
  //SECTION
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment, include: { model: User } }, { model: User }],
    });

    const posts = dbPostData.get({ plain: true });
    const comments = posts.comments;

    res.render("commentSaved", {
      posts,
      comments,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/posts", isAuthorized, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User }],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
      dashboard: req.session.dashboard,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE AND SAVE COMMENT
router.post("/comment", isAuthorized, async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      content: req.body.comment,
      user_id: req.session.userId,
      post_id: req.body.postId,
    });
    res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// FETCH ALL POSTS FOR CURRENT SESSION USER
router.get("/user-posts/", isAuthorized, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User }],
      where: { user_id: req.session.userId },
    });

    req.session.save(() => {
      req.session.dashboard = true;
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("userPosts", {
      posts,
      loggedIn: req.session.loggedIn,
      dashboard: (req.session.dashboard = true),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// RENDER POST AFTER IT IS CREATED
router.get("/create-posts/", isAuthorized, async (req, res) => {
  res.render("createPost", {
    loggedIn: req.session.loggedIn,
    dashboard: (req.session.dashboard = true),
  });
});

// RENDER POST TO BE EDITED OR DELETED
router.get("/edit-posts/:id", isAuthorized, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }

    const post = postData.get({ plain: true });

    res.render("editPost", {
      post,
      loggedIn: req.session.loggedIn,
      dashboard: (req.session.dashboard = true),
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD POST TO THE POST TABLE IN THE BLOG DATABASE
router.post("/create-post", async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    });

    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE POST BASED ON EDITS PROVIDED BY USER
router.put("/update/:id", isAuthorized, async (req, res) => {
  try {
    const updatedPost = await Post.update(
      { title: req.body.title, content: req.body.content },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updatedPost || updatedPost[0] === 0) {
      res
        .status(404)
        .json({ message: "Can't update. No product found with that id!" });
      return;
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE POST BASED ON REQUEST BY USER
router.delete("/delete/:id", isAuthorized, async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedPost || deletedPost[0] === 0) {
      res
        .status(404)
        .json({ message: "Can't delete. No product found with that id!" });
      return;
    }

    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
