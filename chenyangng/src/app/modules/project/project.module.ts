import {SharedModule} from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoodDeedMovementComponent } from './good-deed-movement/good-deed-movement.component';
import { MichelinComponent } from './michelin/michelin.component';
import { FindeventComponent } from './findevent/findevent.component';
import { IovisionComponent } from './iovision/iovision.component';
import { AsaComponent } from './asa/asa.component';
import { UvspComponent } from './uvsp/uvsp.component';
import { PollaroidComponent } from './pollaroid/pollaroid.component';
import { FrenchAirlineComponent } from './french-airline/french-airline.component';
import { StadiumComponent } from './stadium/stadium.component';
import { ExpernovaComponent } from './expernova/expernova.component';
import { AllonsyComponent } from './allonsy/allonsy.component';
import { SlabComponent } from './slab/slab.component';
import { EuronextComponent } from './euronext/euronext.component';
import { MailSystemComponent } from './mail-system/mail-system.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
     ProjectCardComponent,
     ProjectDetailComponent,
     GoodDeedMovementComponent,
     MichelinComponent,
     FindeventComponent,
     IovisionComponent,
     AsaComponent,
     UvspComponent,
     PollaroidComponent,
     FrenchAirlineComponent,
     StadiumComponent,
     ExpernovaComponent,
     AllonsyComponent,
     SlabComponent,
     EuronextComponent,
     MailSystemComponent
  ],
  exports: [
    ProjectCardComponent,
    ProjectDetailComponent
  ]
})
export class ProjectModule { }
