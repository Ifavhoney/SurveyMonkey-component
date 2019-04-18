let express = require("express");
let passport = require("passport");
var session = require('express-session');

let DB = require("../config/db");

let surveyModel = require("../models/survey");
let books = require("./index")
//get exported model
let Survey = surveyModel.survey;

module.exports.displaySurvey = (req, res, next) => {

  Survey.find((err, surveyList) => {
    if (err) {
      return console.error(err);
    } else {
      res.json({ success: true, msg: 'Contact List Displayed', surveyList: surveyList, user: req.user });

    }
  });
};

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

module.exports.processDeleteSurvey = (req, res, next) => {
  let id = req.params.id;

  Survey.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.json({ success: true, msg: 'Survey Deleted!' });
    }
  });
}


