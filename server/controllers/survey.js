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
    question1: req.body.question_1,
    question2: req.body.question_2,
    question3: req.body.question_3,
    question4: req.body.question_4,
    question5: req.body.question_5,
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

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  surveyModel.findById(id, (err, surveyObject) => {
      if(err) {
          console.log(err);
          res.end(err);
      }
      else
      {
          res.json({success: true, msg: 'Successfully Displayed Survey to Edit', survey: surveyObject});
      }
  });
}

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedSurvey = surveyModel({
    title: req.body.title,
    question1: req.body.question_1,
    question2: req.body.question_2,
    question3: req.body.question_3,
    question4: req.body.question_4,
    question5: req.body.question_5,
    status: req.body.status
  });

  surveyModel.update({_id: id}, updatedSurvey, (err) => {
      if(err) {
          console.log(err);
          res.end(err);
      }
      else {
          res.json({success: true, msg: 'Successfully Edited Survey', survey: updatedSurvey});
      }
  })
}


module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  
  surveyModel.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfully Deleted Contact" });
    }
  });
};