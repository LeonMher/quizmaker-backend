const express = require("express");
const Quiz = require("../models/quizModel");
const router = express();

router.post("/submit-quiz", async (req, res) => {
  try {
    // Create a new Quiz model
    const quiz = new Quiz(req.body);

    // Save the quiz to the database
    await quiz.save();

    // Send a success response
    res.json({ message: "Quiz submitted successfully!" });
  } catch (err) {
    // Send an error response
    res.status(500).json({ message: "Failed to submit quiz." });
  }
});

router.get("/get", async (req, res) => {
  const quizzes = await Quiz.find();

  res.send(quizzes);
});

module.exports = router;
