import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
     ProjectCardComponent
  ],
  exports: [
    ProjectCardComponent
  ]
})
export class ProjectModule { }
