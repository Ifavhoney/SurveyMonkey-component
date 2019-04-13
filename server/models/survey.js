let mongoose = require("mongoose");

let surveySchema = mongoose.Schema(
  {
    faculty: {
      type: String,
      default: "",
      trim: true,
      required: "Faculty is required"
    },
    modified: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "survey"
  }
);

module.exports.survey = mongoose.model("Survey", surveySchema);
