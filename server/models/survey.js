let mongoose = require("mongoose");

let surveySchema = mongoose.Schema(
  {
    title: {
      type: String
    },
    question_1: {
      type: String
    },
    question_2: {
      type: String
    },
    question_3: {
      type: String
    },
    question_4: {
      type: String
    },
    question_5: {
      type: String
    },
    status: {
      type: String
    }
  },
  {
    collection: "survey"
  }
);

module.exports.survey = mongoose.model("Survey", surveySchema);

