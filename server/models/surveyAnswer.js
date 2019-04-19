let mongoose = require("mongoose");

let surveySchema = mongoose.Schema(
    {
        surveyID: {
            type: String
        },

        surveyTitle: {
            type: String
        },


        postedByuser: {
            type: String
        }, 
        
        submitedByuser:{
            type: String
        },

        time: {
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
