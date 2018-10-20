const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const FinanceSchema = new Schema({
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

const Finance = mongoose.model("users", FinanceSchema);
module.exports = Finance;
