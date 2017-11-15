import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project/project-card/project-card.component';
import { AppComponent } from './app.component';
import { ProjectCard } from './project/project';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { AboutMeComponent } from './general/about-me/about-me.component';

const routes: Routes = [
  {
    path: "",
    component: ProjectCardComponent
  },
  {
    path: "detail",
    component: ProjectDetailComponent
  },
  {
    path: "about_me",
    component: AboutMeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
