
const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  summary: String,
  skills: String,
  experience: String,
  education: String,
  template: String, 
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);
