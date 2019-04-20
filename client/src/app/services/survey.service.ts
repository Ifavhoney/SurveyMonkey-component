import { Injectable } from "@angular/core";
//PUSH IT STOP BEING WASTE, P U S H IT OR SUFFERRRR,
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { formatDate } from "@angular/common";

//importing model (client)
import { Survey } from "../models/survey";
import { User } from "../models/user";
import { SurveyAnswer } from "../models/survey-answer"
@Injectable({
  providedIn: "root"
})

//endpoint
export class SurveyService {
  private user: User;
  private authToken: any = null;
  jstoday = "";
  today = new Date();

  //connect to API
  //private endpoint = "http://localhost:3000/api/survey/";
  private endpoint = "https://group16-survey.herokuapp.com/api/survey/";

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
    this.jstoday = formatDate(this.today, "dd-MM-yyyy hh:mm:ss a", "en-US", "+04:00")
  }

  // public displayTypeSurveys(): Observable<any> {
  //   //returns types of surveys
  //   return this.http.get<any>(
  //     this.endpoint + "create-survey",
  //     this.httpOptions
  //   );
  // }

  public getList(): Observable<any> {
    //this.loadToken();
    return this.http.get<any>(this.endpoint + "display-survey", this.httpOptions);
  }

  public addSurvey(survey: Survey, user: User): Observable<any> {
    survey.username = user.username;
    // console.log(survey.username);

    //this.loadToken();
    return this.http.post<any>(
      this.endpoint + "display-survey/add",
      survey,
      this.httpOptions
    );
  }

  public getSurvey(survey: Survey): Observable<any> {
    return this.http.get<any>(this.endpoint + 'display-survey/edit/' + survey._id, this.httpOptions);
  }

  public getSurveyQuestion(survey: Survey): Observable<any> {
    return this.http.get<any>(this.endpoint + "answer-survey/submit/" + survey._id, this.httpOptions);
  }

  public getSurveyAnswers(survey: Survey): Observable<any> {
    return this.http.get<any>(this.endpoint + "answer-survey/view/" + survey._id, this.httpOptions);
  }

  public editSurvey(survey: Survey): Observable<any> {
    return this.http.post<any>(this.endpoint + 'display-survey/edit/' + survey._id, survey, this.httpOptions);
  }





  public answerQuestions(survey: Survey, answer: SurveyAnswer, user: User): Observable<any> {
    //SET Variables
    answer.postedByuser = survey.username;
    answer.submitedByuser = user.username;
    answer.surveyTitle = survey.title;
    answer.surveyID = survey._id;
    answer.time = this.jstoday

    return this.http.post<any>(this.endpoint + "answer-survey/submit/" + survey._id, answer, this.httpOptions)
  }

  public updateSurveyStatus(survey: Survey): Observable<any> {
    return this.http.post<any>(this.endpoint + "display-survey/deactivate/" + survey._id, this.httpOptions);
  }

  public deleteSurvey(survey: Survey): Observable<any> {
    return this.http.get<any>(this.endpoint + "display-survey/delete/" + survey._id, this.httpOptions);
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
