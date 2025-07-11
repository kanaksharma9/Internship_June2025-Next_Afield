const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");

// POST resume
router.post("/", async (req, res) => {
  try {
    const resume = new Resume(req.body);
    const saved = await resume.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to save resume" });
  }
});

// GET resume by ID
router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ error: "Resume not found" });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resume" });
  }
});

module.exports = router;

