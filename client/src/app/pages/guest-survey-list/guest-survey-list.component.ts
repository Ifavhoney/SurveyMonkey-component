import { Component, OnInit } from "@angular/core";
import { SurveyService } from "src/app/services/survey.service";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";
import { ActivatedRoute } from "@angular/router";

//import model
import { Survey } from "../../models/survey";

@Component({
  selector: 'app-guest-survey-list',
  templateUrl: './guest-survey-list.component.html',
  styleUrls: ['./guest-survey-list.component.css']
})
export class GuestSurveyListComponent implements OnInit {
  surveys: Survey[];

  constructor(
    route: ActivatedRoute,
    private surveyListService: SurveyService) {
  }

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.displaySurveyList();
  }

  displaySurveyList(): void {
    this.surveyListService.getList().subscribe(data => {
      if (data.success) {
        console.log("hello" + data);
        this.surveys = data.surveyList;
      } else {
        // this.flashMessage.show('User must be logged-in', { cssClass: 'alert-danger', timeOut: 3000 });
      }
    });
  }
}
