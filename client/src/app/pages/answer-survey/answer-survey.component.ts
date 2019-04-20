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
  selector: "app-answer-survey",
  templateUrl: "./answer-survey.component.html",
  styleUrls: ["./answer-survey.component.css"]
})
export class AnswerSurveyComponent implements OnInit {
  //Global Variables

  title: string;
  survey: Survey;
  surveyAnswer: SurveyAnswer;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private service: SurveyService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();
    this.surveyAnswer = new SurveyAnswer();
    this.user = new User();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
      this.surveyAnswer.surveyID = this.survey._id;
    });

    if (this.title === "Submit Answer") {
      //given the ._ID was set, questions can be display
      this.getSurveyQuestion();
    }
  }

  private getSurveyQuestion(): void {
    this.service.getSurveyQuestion(this.survey).subscribe(data => {
      this.survey = data.survey;
      console.log(this.survey._id);
    });
  }

  public answerSurveyQuestions(): void {
    this.service.getSurveyQuestion(this.survey).subscribe(_data => {
      this.survey = _data.survey;

      if (_data.success) {
        //TO DO SET POSTEDBY
        this.service
          .answerQuestions(this.survey, this.surveyAnswer, this.user)
          .subscribe(data => {
            if (data.success) {
              this.flashMessage.show("Answers Sent!", {
                cssClass: "alert-success",
                timeOut: 3000
              });
              this.router.navigate(["/survey/display-survey"]);
            } else {
              this.flashMessage.show("Add Survey Failed", {
                cssClass: "alert-danger",
                timeOut: 3000
              });
              this.router.navigate(["/home"]);
            }
          });
      }
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
