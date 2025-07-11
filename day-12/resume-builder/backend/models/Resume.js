const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String,
  bullets: [String]
});

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  skills: String,
  education: String,
  experience: [experienceSchema]
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);
