import { Component, OnInit } from "@angular/core";
import { SurveyService } from "src/app/services/survey.service";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";
import { ActivatedRoute } from "@angular/router";

//import model
import { Survey } from "../../models/survey";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent extends BasePageComponent implements OnInit {
  surveys: Survey[];

  constructor(
    route: ActivatedRoute,
    private surveyListService: SurveyService) {
    super(route);
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
