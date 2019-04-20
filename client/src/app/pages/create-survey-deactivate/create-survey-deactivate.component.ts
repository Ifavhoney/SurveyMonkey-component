import { Component, OnInit } from '@angular/core';
import { SurveyService } from "src/app/services/survey.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

//import model
import { Survey } from "../../models/survey";

@Component({
  selector: 'app-create-survey-deactivate',
  templateUrl: './create-survey-deactivate.component.html',
  styleUrls: ['./create-survey-deactivate.component.css']
})
export class CreateSurveyDeactivateComponent implements OnInit {
  title: string;
  survey: Survey;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit() {

    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey;

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    })

    this.updateStatus(this.survey);
  }

  private updateStatus(survey: Survey): void {
    this.surveyService.updateSurveyStatus(survey).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 3000 });
        this.router.navigate(['/survey/display-survey']);
      } else {
        this.flashMessage.show('Status of survey did not change', { cssClass: 'alert-danger', timeOut: 3000 });
        this.router.navigate(['/survey/display-survey']);
      }
    });
  }


}
