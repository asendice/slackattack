const express = require("express");
const router = express.Router();

const { getServers, postServer } = require("../controllers/auth")

router.get("/servers", getServers);
router.post("/servers", postServer);

module.exports = router;