const mongoose = require("mongoose");
const { isEmail } = require("validator");
const { compare, hash } = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "the name is required"],
  },
  email: {
    type: String,
    validate: {
      validator: (value) => {
        return isEmail(value);
      },
    },
  },
  password: String,
});
userSchema.pre("save", async function () {
  return (this.password = await hash(this.password, 10));
});
userSchema.methods.comparePassword = async function (pass) {
  return await compare(pass, this.password);
};
module.exports = mongoose.model("User", userSchema);
