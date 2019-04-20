let express = require("express");
let passport = require("passport");
var session = require("express-session");

let DB = require("../config/db");

let surveyModel = require("../models/survey");
let surveyAnswerModel = require("../models/surveyAnswer");
//get exported model
let Survey = surveyModel.survey;
let Answer = surveyAnswerModel.survey;
//Show all Surveys
module.exports.displaySurvey = (req, res, next) => {
  Survey.find((err, surveyList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json({
        success: true,
        msg: "SurveyList List Displayed",
        surveyList: surveyList,
        user: req.user
      });
    }
  });
};

//Add Surveys
module.exports.processSurvey = (req, res, next) => {
  //username bodied on Angular side
  let surveyFields = Survey({
    title: req.body.title,
    username: req.body.username,
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4,
    question5: req.body.question5,
    status: "active"
  });

  Survey.create(surveyFields, (err, val) => {
    if (err) {
      return next(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully added Survey"
      });
    }
  });
};

//Show survey questions
module.exports.displaySurveyQuestion = (req, res, next) => {
  let id = req.params.id;

  Survey.findById(id, (err, surveyObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show survey question
      res.json({
        success: true,
        msg: "Survey Question is Displaying",
        survey: surveyObject
      });
    }
  });
};

//answer survey questions
module.exports.answerSurveyQuestions = (req, res, next) => {
  //get params ID
  let surveyID = req.params.id;
  let answerFields = Answer({
    surveyID: surveyID,
    surveyTitle: req.body.surveyTitle,
    postedByuser: req.body.postedByuser,
    submitedByuser: req.body.submitedByuser,
    time: req.body.time,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4,
    answer5: req.body.answer5
  });

  //Add body
  Answer.create(answerFields, (err, val) => {
    if (err) {
      console.log(err)
    }
    else {
      res.json({
        success: true,
        msg: "Successfully added Survey"
      });
    }
  });
};

//View answers
module.exports.displaySurveyAnswers = (req, res, next) => {
  let surveyID = req.params.id;

  Answer.find({ surveyID: surveyID }, (err, obj) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: true, msg: "Answers are Displaying", answer: obj });
    }

  })


}

module.exports.processDeactivateSurvey = (req, res, next) => {
  let id = req.params.id;

  let updatedStatus = Survey({
    "_id": id,
    "status": "inactive"

  })

  Survey.update({ _id: id }, updatedStatus, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      //show the edit page
      res.json({ success: true, msg: 'Deactivated Survey', survey: Survey });
    }
  });


}

//Delete Survey
module.exports.processDeleteSurvey = (req, res, next) => {
  let id = req.params.id;

  Survey.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Survey Deleted!" });
    }
  });
};
