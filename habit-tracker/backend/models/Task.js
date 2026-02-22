const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  time: String,
  priority: String,
  notes: String,
  status: String,
  date: String
});

module.exports = mongoose.model("Task", TaskSchema);