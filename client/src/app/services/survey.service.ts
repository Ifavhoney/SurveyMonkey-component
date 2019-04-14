import { Injectable } from "@angular/core";
//PUSH IT STOP BEING WASTE, P U S H IT OR SUFFERRRR,
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

//importing model (client)
import { Survey } from "../models/survey";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})

//endpoint
export class SurveyService {
  private survey: Survey;
  private user: User;
  private authToken: any = null;

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
    this.user = new User();
    this.survey = new Survey();
  }
  public displayTypeSurveys(): Observable<any> {
    //returns types of surveys
    return this.http.get<any>(
      this.endpoint + "create-survey",
      this.httpOptions
    );
  }
  public addSurvey(survey: Survey): Observable<any> {
    //this.loadToken();
    return this.http.post<any>(
      this.endpoint + "create-survey",
      survey,
      this.httpOptions
    );
  }

  public getList(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }


  private loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      "Authorization",
      this.authToken
    );
  }
}
