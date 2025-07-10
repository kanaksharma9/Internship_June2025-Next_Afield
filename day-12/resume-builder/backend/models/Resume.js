const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  startDate: String,
  endDate: String,
  bullets: [String],
});

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  skills: String,
  education: String,
  template: String,
  experience: [jobSchema],
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);

