import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
     ProjectCardComponent,
     ProjectDetailComponent
  ],
  exports: [
    ProjectCardComponent,
    ProjectDetailComponent
  ]
})
export class ProjectModule { }
