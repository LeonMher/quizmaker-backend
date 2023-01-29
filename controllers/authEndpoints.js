const express = require("express");
const router = express.Router();
const auth = require("../authentication/auth");
const Quiz = require("../models/quizModel");
module.exports = router.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
module.exports = router.get(
  "/auth-endpoint",
  auth,
  async (request, response) => {
    const quizzes = await Quiz.find();
    response.json({
      message: "You are authorized to access me",
      data: quizzes,
    });
  }
);

module.exports = router;
