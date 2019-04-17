import { Component, OnInit } from "@angular/core";
import { SurveyService } from "src/app/services/survey.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
//import service
//import model
import { Survey } from "../../models/survey";

@Component({
  selector: "app-create-survey",
  templateUrl: "./create-survey.component.html",
  styleUrls: ["./create-survey.component.css"]
})
export class CreateSurveyComponent implements OnInit {
  title: string;
  survey: Survey;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private service: SurveyService
  ) {}

  ngOnInit() {
    this.survey = new Survey();

    //this.onDisplaySurvey();

    this.title = this.route.snapshot.data.title;
  }
  public onDisplaySurvey(): void {
    this.service.displayTypeSurveys().subscribe(data => {
      if (data.info) {
        this.survey = data.info;
      }
    });
  }

  onDetailsPageSubmit(): void {
    switch (this.title) {
      case "Create A Survey!":
        // this.survey1.faculty = this.val;
        this.service.addSurvey(this.survey).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {
              cssClass: "alert-success",
              timeOut: 3000
            });
            this.router.navigate(["/survey/display-survey"]);
          } else {
            this.flashMessage.show("Add Survey Failed", {
              cssClass: "alert-danger",
              timeOut: 3000
            });
            this.router.navigate(["/survey/display-survey"]);
          }
        });
        break;
    }
  }
}
