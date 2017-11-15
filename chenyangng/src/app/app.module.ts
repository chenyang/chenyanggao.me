import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project/project-card/project-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { AboutMeComponent } from './general/about-me/about-me.component';
import { ProjectModule } from './project/project.module';
import { GeneralModule } from './general/general.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    GeneralModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   title = "GAO CHENYANG PORTFOLIO SITE";
}
