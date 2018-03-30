import {ResumeComponent} from './modules/general/resume/resume.component';
import {AboutMeComponent} from './modules/general/about-me/about-me.component';
import {ProjectDetailComponent} from './modules/project/project-detail/project-detail.component';
import {ProjectCardComponent} from './modules/project/project-card/project-card.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoodDeedMovementComponent } from './modules/project/good-deed-movement/good-deed-movement.component';
import { MichelinComponent } from './modules/project/michelin/michelin.component';
import { FindeventComponent } from './modules/project/findevent/findevent.component';
import { IovisionComponent } from './modules/project/iovision/iovision.component';
import { AsaComponent } from './modules/project/asa/asa.component';
import { UvspComponent } from './modules/project/uvsp/uvsp.component';
import { PollaroidComponent } from './modules/project/pollaroid/pollaroid.component';
import { FrenchAirlineComponent } from './modules/project/french-airline/french-airline.component';
import { StadiumComponent } from './modules/project/stadium/stadium.component';
import { ExpernovaComponent } from './modules/project/expernova/expernova.component';
import { AllonsyComponent } from './modules/project/allonsy/allonsy.component';
import { SlabComponent } from './modules/project/slab/slab.component';
import { EuronextComponent } from './modules/project/euronext/euronext.component';
import { MailSystemComponent } from './modules/project/mail-system/mail-system.component';

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
