const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Quiz = mongoose.model("Quiz", {
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  title: String,
  description: String,
  questions: [
    {
      question: String,
      options: [String],
      answer: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = Quiz;
