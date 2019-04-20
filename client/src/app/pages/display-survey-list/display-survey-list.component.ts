import { Component, OnInit } from "@angular/core";
import { SurveyService } from "src/app/services/survey.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

//import model
import { Survey } from "../../models/survey";
import { User } from 'src/app/models/user';

@Component({
  selector: "app-display-survey-list",
  templateUrl: "./display-survey-list.component.html",
  styleUrls: ["./display-survey-list.component.css"]
})
export class DisplaySurveyListComponent implements OnInit {
  surveys: Survey[];
  survey: Survey;
  user: User;

  constructor(
    private surveyListService: SurveyService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.survey = new Survey();
    this.user = new User();
    this.displaySurveyList();
  }

  private onDeleteClick(): void {
    if (!confirm("Are Your Sure?")) {
      this.router.navigate(["/survey/display-survey"]);
    }
  }

  private onDeactivateClick(): void {
    if (!confirm('Deacivate Survey?')) {
      this.router.navigate(['/survey/display-survey']);
    }
  }

  displaySurveyList(): void {
    this.surveyListService.getList().subscribe(data => {
      if (data.success) {
        console.log("hello" + data);
        this.surveys = data.surveyList;
        console.log(this.surveys);
      } else {
        this.flashMessage.show("User must be logged-in", {
          cssClass: "alert-danger",
          timeOut: 3000
        });
      }
    });
  }

  isActive(): boolean {
    let result = true;
    if (this.survey.status == 'active') {
      result = true;
    }
    else {
      result = false;
    }
    return true;
  }

}
