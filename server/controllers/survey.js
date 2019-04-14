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
  console.log(req.body);
  let surveyFields = Survey({
    "title": req.body.title,
    "question_1": req.body.q1,
    "question_2": req.body.q2,
    "question_3": req.body.q3,
    "question_4": req.body.q4,
    "question_5": req.body.q5,
    "status": "active"
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
    "title": req.body.title,
    "question_1": req.body.q1,
    "question_2": req.body.q2,
    "question_3": req.body.q3,
    "question_4": req.body.q4,
    "question_5": req.body.q5,
    "status": "active"
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
