import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./partials/header/header.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

// Services
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { AuthService } from "./services/auth.service";
import { SurveyService } from "./services/survey.service";
import {
  JwtModule,
  JwtHelperService,
  JwtInterceptor
} from "@auth0/angular-jwt";
import { BasePageComponent } from "./partials/base-page/base-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { SurveyComponent } from "./pages/survey/survey.component";
import { CreateSurveyComponent } from "./pages/create-survey/create-survey.component";
import { DisplaySurveyListComponent } from './pages/display-survey-list/display-survey-list.component';
import { CreateSurveyDeleteComponent } from './pages/create-survey-delete/create-survey-delete.component';
import { AnswerSurveyComponent } from './pages/answer-survey/answer-survey.component';
import { CreateSurveyDeactivateComponent } from './pages/create-survey-deactivate/create-survey-deactivate.component';
import { TruehomepageComponent } from './pages/truehomepage/truehomepage.component';

export function jwtTokenGetter() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BasePageComponent,
    HomeComponent,
    SurveyComponent,
    CreateSurveyComponent,
    DisplaySurveyListComponent,
    CreateSurveyDeleteComponent,
    AnswerSurveyComponent,
    CreateSurveyDeactivateComponent,
    TruehomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
