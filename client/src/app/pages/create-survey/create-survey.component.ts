import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-survey",
  templateUrl: "./create-survey.component.html",
  styleUrls: ["./create-survey.component.css"]
})
export class CreateSurveyComponent implements OnInit {
  title: String;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
  }
}
