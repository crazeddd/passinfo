import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
    unique: [true, "username already exists"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: false,
  },
});

export default mongoose.models.Users || mongoose.model("Users", UserSchema);