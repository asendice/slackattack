const Server = require("../models/Server");

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
  const { admin, name, description, channels, picture, users, password, id } = req.body;
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
