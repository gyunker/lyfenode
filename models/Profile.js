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
  location: {
    type: String
  },
  zipcode: {
    type: String
  },
  quicklinks: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    },
    youtube: {
      type: String
    },
    linkedin: {
      type: String
    },
    espn: {
      type: String
    },
    pandora: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Profile = mongoose.model("profile", ProfileSchema);
module.exports = Profile;
