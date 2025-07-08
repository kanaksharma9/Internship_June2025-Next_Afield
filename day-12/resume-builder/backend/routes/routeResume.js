
const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");

router.post("/", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const saved = await newResume.save();
    res.json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    res.json(resume);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;