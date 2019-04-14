let express = require("express");
let passport = require("passport");

let DB = require("../config/db");

let surveyModel = require("../models/survey");
//get exported model
let Survey = surveyModel.survey;

module.exports.displaySurvey = (req, res, next) => {
  Survey.find((err, val) => {
    if (err) {
      return next(err);
    } else {
      res.json({
        info: val
      });
    }
  });
};

module.exports.processSurvey = (req, res, next) => {
  let surveyFields = Survey({
    title: req.body.title,
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4,
    question5: req.body.question5,
    status: req.body.status
  });
  console.log(req.body.question1);

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
