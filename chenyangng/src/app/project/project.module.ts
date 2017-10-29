import { SharedModule } from '../shared/shared.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ProjectListComponent, 
    ProjectDetailComponent
  ], 
  exports: [
    ProjectListComponent, 
    ProjectDetailComponent
  ]
})
export class ProjectModule { }
