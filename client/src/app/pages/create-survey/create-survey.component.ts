import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
//import service
//import model
import { Survey } from "../../models/survey";
import { SurveyService } from "src/app/services/survey.service";

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
}
