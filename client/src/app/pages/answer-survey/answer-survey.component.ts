import { Component, OnInit } from '@angular/core';
import { SurveyService } from "src/app/services/survey.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

//import model
import { Survey } from "../../models/survey";
import { SurveyAnswer } from "../../models/survey-answer";
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.css']
})
export class AnswerSurveyComponent implements OnInit {
  title: string;
  survey: Survey;
  surveyAnswer: SurveyAnswer;



  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private service: SurveyService
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();
    this.surveyAnswer = new SurveyAnswer();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });

    if (this.title === 'Submit Answer') {
      this.getSurveyQuestion(this.survey);
    }
  }

  private getSurveyQuestion(survey: Survey): void {
    this.service.getSurveyQuestion(survey).subscribe(data => {
      this.survey = data.survey;
    });
  }


  onDetailsPageSubmit(): void {
    switch (this.title) {

    }
  }



}
