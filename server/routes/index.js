let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");
let surveyController = require("../controllers/survey");


/* POST - processes the Login Page */
router.post("/login", indexController.processLoginPage);

/* POST - processes the User Registration Page */
router.post("/register", indexController.processRegisterPage);

/* GET - perform user logout */
router.get("/logout", indexController.performLogout);

router.get("/survey/display-survey", surveyController.displaySurvey);

router.post("/survey/display-survey/add", surveyController.processSurvey);

router.get("/survey/answer-survey/submit/:id", surveyController.displaySurveyQuestion);
router.post("/survey/answer-survey/submit/:id", surveyController.answerSurveyQuestions);
//TO DO - DISPLAY ANSWERS

router.get("/survey/answer-survey/view/:id", surveyController.displaySurveyAnswers);



// router.post("/survey/display-survey/edit/:id", surveyController.processEditSurvey);

router.get("/survey/display-survey/delete/:id", surveyController.processDeleteSurvey);

module.exports = router;
