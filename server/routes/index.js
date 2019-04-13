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

router.get("/survey/create-survey", surveyController.displaySurvey);

router.post("/survey/create-survey", surveyController.processSurvey);

module.exports = router;
