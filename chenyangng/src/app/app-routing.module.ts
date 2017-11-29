import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project/project-card/project-card.component';
import { AppComponent } from './app.component';
import { ProjectCard } from './project/project';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { AboutMeComponent } from './general/about-me/about-me.component';
import { ResumeComponent } from './general/resume/resume.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/projectCards",
    pathMatch: "full"
  },
  {
    path: "projectCards",
    component: ProjectCardComponent
  },
  {
    path: "detail/:id",
    component: ProjectDetailComponent
  },
  {
    path: "about_me",
    component: AboutMeComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
