const User = require("../models/user.model.js");
const createUser = async (req, res) => {
  const result = await User.create(req.body);
  res.send({
    msg: "create a users",
    errors: [],
    data: result,
    status: 201,
  });
};


const getUsers = async (req, res) => {
  const result = await User.find();
  res.send({
    msg: "showing all users",
    errors: [],
    data: result,
    status: 200,
  });
};

module.exports = {
  createUser,
  getUsers,
};
