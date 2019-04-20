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
  survey: Survey;
  user: User;
  surveyAnswer: SurveyAnswer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private service: SurveyService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.surveyAnswer = new SurveyAnswer();

    //Set ActivatedRoutes
    this.title = this.activatedRoute.snapshot.data.title;

    this.activatedRoute.params.subscribe(params => {
      //set set surveyID for service
      this.surveyAnswer.surveyID = params.id;
    });

    if (this.title === "Results") {
      this.getAnswerQuestions();
    }
  }

  public getAnswerQuestions(): void {
    this.service.getSurveyAnswers(this.surveyAnswer).subscribe(data => {
      this.surveyAnswer = data.answer;
      console.log(this.surveyAnswer);
    });
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
