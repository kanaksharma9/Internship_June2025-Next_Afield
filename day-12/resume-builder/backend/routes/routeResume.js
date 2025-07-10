const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");

router.post("/", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const saved = await newResume.save();
    res.json(saved);
  } catch (err) {
    console.error("MongoDB Save Error:", err);
    res.status(500).json({ error: "MongoDB error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ error: "Resume not found" });
    res.json(resume);
  } catch (err) {
    console.error("MongoDB Fetch Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
