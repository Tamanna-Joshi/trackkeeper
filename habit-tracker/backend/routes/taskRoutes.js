const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Get tasks by date
router.get("/:date", async (req, res) => {
  try {
    const tasks = await Task.find({ date: req.params.date });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Save tasks for a date
router.post("/", async (req, res) => {
  try {
    const tasks = req.body;

    if (!tasks.length) return res.json({ message: "No tasks" });

    const date = tasks[0].date;

    await Task.deleteMany({ date });
    await Task.insertMany(tasks);

    res.json({ message: "Tasks saved successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;