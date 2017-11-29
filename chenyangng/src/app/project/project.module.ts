import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    NgbModule
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
