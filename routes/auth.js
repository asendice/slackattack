const express = require("express");
const router = express.Router();

const {
  getServers,
  postServer,
  getChannels,
  postChannels,
} = require("../controllers/auth");

router.get("/servers", getServers);
router.post("/servers", postServer);
router.get("/channels/:serverId", getChannels);
router.post("/channels", postChannels);

module.exports = router;
