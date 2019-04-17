import { Component, OnInit } from '@angular/core';
import { SurveyService } from "src/app/services/survey.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

//import model
import { Survey } from "../../models/survey";

@Component({
  selector: 'app-delete-survey',
  templateUrl: './delete-survey.component.html',
  styleUrls: ['./delete-survey.component.css']
})
export class DeleteSurveyComponent implements OnInit {
  title: string;
  survey: Survey;

  constructor(
    private activatedRoute: ActivatedRoute,
    private surveyListService: SurveyService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title =  this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();


    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });

    this.deleteSurvey(this.survey);
  }

  private deleteSurvey(survey: Survey): void {
    this.surveyListService.deleteSurvey(survey).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/survey/display-survey']);
      } else {
        this.flashMessage.show('Delete Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/survey/display-survey']);
      }
    });
  }

}
