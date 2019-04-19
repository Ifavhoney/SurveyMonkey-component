let mongoose = require("mongoose");

let surveySchema = mongoose.Schema(
    {
        title: {
            type: String
        },
        answer1: {
            type: String
        },
        answer2: {
            type: String
        },
        answer3: {
            type: String
        },
        answer4: {
            type: String
        },
        answer5: {
            type: String
        }
    },
    {
        collection: "surveyAnswer"
    }
);

module.exports.survey = mongoose.model("SurveyAnswer", surveySchema);
