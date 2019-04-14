let mongoose = require("mongoose");

let surveySchema = mongoose.Schema(
  {
    title: {
      type: String
    },
    question1: {
      type: String
    },
    question2: {
      type: String
    },
    question3: {
      type: String
    },
    question4: {
      type: String
    },
    question5: {
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
