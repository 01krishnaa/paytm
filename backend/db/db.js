const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:1234567890@cluster01.i8pgo02.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  username: string,
  password: string,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
