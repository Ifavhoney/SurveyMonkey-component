import { Component, OnInit } from "@angular/core";
import { SurveyService } from "src/app/services/survey.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';
//import service
//import model
import { Survey } from "../../models/survey";


@Component({
  selector: "app-create-survey",
  templateUrl: "./create-survey.component.html",
  styleUrls: ["./create-survey.component.css"]
})
export class CreateSurveyComponent implements OnInit {
  //add the field
  fieldArray: Array<any> = [
    {
      name: "Jason"
    },
    {
      name: "hello"
    }
  ];

  //text
  newAttribute: any = {};
  firstField: Boolean = true;
  //see if edit

  isEditItems: Boolean = false;

  title: string;
  val: string;


  survey: Survey[];
  survey1: Survey;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private service: SurveyService
  ) {}

  public addFieldValue(index: any) {
    this.fieldArray.push(this.newAttribute);
  }

  ngOnInit() {
    this.survey = new Array<Survey>();
    this.val;
    this.onDisplaySurvey();
    this.title = this.route.snapshot.data.title;
  }
  public onDisplaySurvey(): void {
    this.service.displayTypeSurveys().subscribe(data => {
      if (data.info) {
        this.survey = data.info;
      }
    });
  }

  public onTitleClick(btnVal: any): void {
    this.val = btnVal.faculty;
  }

  onDetailsPageSubmit(): void {
    switch (this.title) {
      case 'Create A Survey!':
      this.service.addSurvey(this.survey1).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/home']);
        } else {
          this.flashMessage.show('Add Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/home']);
        }
      });
      break;
    }
  }
}
