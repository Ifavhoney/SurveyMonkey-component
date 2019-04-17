import { Component, OnInit } from "@angular/core";
import { SurveyService } from "src/app/services/survey.service";

import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
//import service
//import model
import { Survey } from "../../models/survey";
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: "app-create-survey",
  templateUrl: "./create-survey.component.html",
  styleUrls: ["./create-survey.component.css"]
})
export class CreateSurveyComponent implements OnInit {
  title: string;
  survey: Survey;
  user: User;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private service: SurveyService, private authService: AuthService
  ) {}

  ngOnInit() {
    this.survey = new Survey();

    //this.onDisplaySurvey();

    this.user = new User();

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
        this.service.addSurvey(this.survey, this.user).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {
              cssClass: "alert-success",
              timeOut: 3000
            });
            this.router.navigate(["/survey/create-survey"]);
          } else {
            this.flashMessage.show("Add Survey Failed", {
              cssClass: "alert-danger",
              timeOut: 3000
            });
            this.router.navigate(["/home"]);
          }
        });
        break;
    }
  }

  isLoggedIn(): boolean {
    const result = this.authService.loggedIn();
    if(result) {
      this.user = JSON.parse(localStorage.getItem('user'));
     

    }
    return result;
  }


 
}
