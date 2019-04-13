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
    faculty: req.body.faculty,
    question: req.body.question,
    answer: req.body.answer,
    modified: req.body.modified
  });

  Survey.create(surveyFields, (err, val) => {
    if (err) {
      return next(err);
    } else {
      res.json({
        success: true,
        msg: "Successfullt added Survey"
      });
    }
  });
};
