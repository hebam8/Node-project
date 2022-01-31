const User = require("../models/User");

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send("invalid email");
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(401).send("invalid password");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { register, login };
