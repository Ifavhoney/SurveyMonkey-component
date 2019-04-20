//Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { SurveyComponent } from "./pages/survey/survey.component";
import { CreateSurveyComponent } from "./pages/create-survey/create-survey.component";
import { DisplaySurveyListComponent } from './pages/display-survey-list/display-survey-list.component';
import { CreateSurveyDeleteComponent } from './pages/create-survey-delete/create-survey-delete.component';
import { AnswerSurveyComponent } from './pages/answer-survey/answer-survey.component';
import { CreateSurveyDeactivateComponent } from './pages/create-survey-deactivate/create-survey-deactivate.component';
import { GuestSurveyListComponent } from './pages/guest-survey-list/guest-survey-list.component';

// Route Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "register", component: RegisterComponent, data: { title: "Register" } },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "logout", redirectTo: "/login", pathMatch: "full" },

  { path: "survey/display-survey", component: DisplaySurveyListComponent, data: { title: "Survey List" }, canActivate: [AuthGuard] },
  { path: "survey/display-survey/add", component: CreateSurveyComponent, data: { title: "Create A Survey!" }, canActivate: [AuthGuard] },
  { path: "survey/display-survey/delete/:id", component: CreateSurveyDeleteComponent, data: { title: "Deleted Survey!" }, canActivate: [AuthGuard] },
  { path: "survey/display-survey/deactivate/:id", component: CreateSurveyDeactivateComponent, data: { title: "Survey Deactivated!" }, canActivate: [AuthGuard] },

  { path: "survey/answer-survey/submit/:id", component: AnswerSurveyComponent, data: { title: "Submit Answer" } },

  { path: "survey/survey-list", component: SurveyComponent, data: { title: "Survey-list" } },
  { path: "survey/guest-survey-list", component: GuestSurveyListComponent, data: {title: "Guest Survey List" } },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
