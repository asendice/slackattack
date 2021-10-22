const express = require("express");
const router = express.Router();

const {
  getServers,
  postServer,
  getChannels,
  postChannels,
  getPosts,
  postPosts,
} = require("../controllers/auth");

router.get("/servers", getServers);
router.post("/servers", postServer);
router.get("/channels/:serverId", getChannels);
router.post("/channels", postChannels);
router.get("/posts/:channelId", getPosts);
router.post("/posts", postPosts);

module.exports = router;
