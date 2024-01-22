const mongoose = require("mongoose");

const mongoConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:1234567890@cluster01.i8pgo02.mongodb.net/paytm"
    );
    console.log("Mongo connection established");
  } catch (error) {
    console.log("Mongo connection failed " + error);
  }
};

mongoConnection();

const userSchema = new mongoose.Schema({
  username: string,
  firstName: string,
  lastName: string,
  password: string,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
