import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project/project-card/project-card.component';
import { AppComponent } from './app.component';
import { ProjectCard } from './project/project';

const routes: Routes = [
  {
    path: "",
    component: ProjectCardComponent
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
