import { Component, OnInit } from "@angular/core";
import { SurveyService } from "src/app/services/survey.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

//import model
import { Survey } from "../../models/survey";
import { SurveyAnswer } from "../../models/survey-answer";
import { User } from "../../models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-display-answers",
  templateUrl: "./display-answers.component.html",
  styleUrls: ["./display-answers.component.css"]
})
export class DisplayAnswersComponent implements OnInit {
  //Global Variables

  title: string;
  surveyQuestion: Survey;
  user: User;
  surveyAnswer: SurveyAnswer;
  answer: Array<SurveyAnswer>;
  survey: Array<Survey>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private service: SurveyService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.surveyAnswer = new SurveyAnswer();
    this.surveyQuestion = new Survey();
    this.answer = new Array<SurveyAnswer>();
    this.survey = new Array<Survey>();

 //   this.surveyAnswer2 = new SurveyAnswer();



    //Set ActivatedRoutes
    this.title = this.activatedRoute.snapshot.data.title;


    this.activatedRoute.params.subscribe(params => {
      this.surveyAnswer.surveyID = params.id;
      this.surveyQuestion._id = this.surveyAnswer.surveyID;
    

    });
    if (this.title === "Results") {
      this.getAnswerQuestions();
      this.getSurveyQuestions()
    }
  }

  public getAnswerQuestions(): void {

    this.service.getSurveyAnswers(this.surveyAnswer).subscribe(data => {
      //data = data.answer;
      this.answer = data.answer


    });
  }

  public getSurveyQuestions(): void {
    console.log(this.surveyQuestion._id);
    this.service.getSurveyQuestion(this.surveyQuestion).subscribe(data => {
      this.survey = data.survey;
    })
  }

  //Return true for user is loggedIn
  isLoggedIn(): boolean {
    const result = this.authService.loggedIn();

    if (result) {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    return result;
  }
}
