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
  ) { }

  ngOnInit() {
    this.survey = new Survey();
    this.user = new User();
    this.title = this.route.snapshot.data.title;

    this.route.params.subscribe(params => {
      this.survey._id = params.id;
    });

    if (this.title === 'Edit Survey') {
      this.getSurvey(this.survey);
    }
  }


  onDetailsPageSubmit(): void {
    switch (this.title) {
      case "Create A Survey!":
        this.service.addSurvey(this.survey, this.user).subscribe(data => {
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
            this.router.navigate(["/home"]);
          }
        });
        break;
      case "Edit Survey":   
        this.service.editSurvey(this.survey).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
            this.router.navigate(['/survey/display-survey']);
          } else {
            this.flashMessage.show('Edit survey fail', { cssClass: 'alert-danger', timeOut: 3000 });
            this.router.navigate(['/survey/display-survey']);
          }
        });
        break;
    }
  }

  private getSurvey(survey: Survey): void {
    this.service.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
    })
  }

  isLoggedIn(): boolean {
    const result = this.authService.loggedIn();
    if (result) {
      //local storage item where our stringified user exists
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return result;
  }



}
