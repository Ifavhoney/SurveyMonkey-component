let express = require("express");
let passport = require("passport");
var session = require('express-session');

let DB = require("../config/db");

let surveyModel = require("../models/survey");
let books = require("./index")
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

  
 // let recommendedBooks = books.getBookRecommendations();
 

 //console.log(recommendedBooks)
 
 //username bodied on Angular side
  let surveyFields = Survey({
    title: req.body.title,
    username: req.body.username,
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4,
    question5: req.body.question5,
    status: req.body.status
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
