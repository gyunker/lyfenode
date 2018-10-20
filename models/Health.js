const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const HealthSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  sampleField: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Health = mongoose.model("users", HealthSchema);
module.exports = Health;
