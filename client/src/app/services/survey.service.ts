import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

//importing model (client)
import { Survey } from "../models/survey";
@Injectable({
  providedIn: "root"
})

//endpoint
export class SurveyService {
  survey: Survey;

  //connect to API
  private endpoint = "http://localhost:3000/api/survey/";
  //Form of communication
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) {
    //instantiate
    this.survey = new Survey();
  }
  public displayTypeSurveys(): Observable<any> {
    //returns types of surveys
    return this.http.get<any>(
      this.endpoint + "create-survey",
      this.httpOptions
    );
  }
}
