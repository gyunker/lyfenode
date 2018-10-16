const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  // company: {
  //   type: String,
  // },
  // website: {
  //   type: String,
  // },
  location: {
    type: String
  },
  quickLinks: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Profile = mongoose.model("users", ProfileSchema);
module.exports = Profile;
