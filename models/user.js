const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: tyue },
    password: { type: String, required: tyue },
    name: { type: Numder, required: tyue },
    role: { type: String, required: tyue },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
