const Server = require("../models/Server");
const Channel = require("../models/Channel");
const Posts = require("../models/Post");

exports.getServers = (req, res) => {
  Server.find().then((servers) => {
    if (!servers) {
      return res.status(404).json({
        errors: [{ servers: "No servers found Error" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        result: servers,
      });
    }
  });
};

exports.postServer = (req, res) => {
  const { admin, name, description, channels, picture, users, password, id } =
    req.body;
  const server = new Server({
    id: id,
    admin: admin,
    name: name,
    description: description,
    channels: channels,
    users: users,
    password: password,
    picture: picture,
  });
  server
    .save()
    .then((response) => {
      res.status(200).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: err }],
      });
    });
};

exports.getChannels = (req, res) => {
  console.log(req.body);
  const { serverId } = req.params;
  console.log(serverId);
  Channel.find({ serverId: serverId }).then((channels) => {
    if (!channels) {
      return res.status(404).json({
        errors: [{ channels: "No channels found Error" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        result: channels,
      });
    }
  });
};

exports.postChannels = (req, res) => {
  const { serverId, posts, name, id } = req.body;
  const channel = new Channel({
    id: id,
    serverId: serverId,
    posts: posts,
    name: name,
  });
  channel
    .save()
    .then((response) => {
      res.status(200).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: err }],
      });
    });
};

exports.getPosts = (req, res) => {
  console.log(req.body);
  const { channelId } = req.params;
  Posts.find({ channelId: channelId }).then((posts) => {
    if (!posts) {
      return res.status(404).json({
        errors: [{ posts: "No posts found Error" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        result: posts,
      });
    }
  });
};

exports.postPosts = (req, res) => {
  const { channelId, content, userId, created } = req.body;
  const post = new Posts({
    channelId: channelId,
    content: content,
    userId: userId,
    created: created
  });
  post
    .save()
    .then((response) => {
      res.status(200).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: err }],
      });
    });
};
