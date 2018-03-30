import {IovisionComponent} from './iovision/iovision.component';
import {AsaComponent} from './asa/asa.component';
import {UvspComponent} from './uvsp/uvsp.component';
import {PollaroidComponent} from './pollaroid/pollaroid.component';
import {FrenchAirlineComponent} from './french-airline/french-airline.component';
import {StadiumComponent} from './stadium/stadium.component';
import {ExpernovaComponent} from './expernova/expernova.component';
import {AllonsyComponent} from './allonsy/allonsy.component';
import {SlabComponent} from './slab/slab.component';
import {EuronextComponent} from './euronext/euronext.component';
import {MailSystemComponent} from './mail-system/mail-system.component';
import {FindeventComponent} from './findevent/findevent.component';
import {MichelinComponent} from './michelin/michelin.component';
import {GoodDeedMovementComponent} from './good-deed-movement/good-deed-movement.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import { NgModule } from "@angular/core";

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
  entryComponents:[
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
