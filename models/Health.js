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
  sampleValue: {
    type: Schema.Types.Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Health = mongoose.model("health", HealthSchema);
module.exports = Health;
