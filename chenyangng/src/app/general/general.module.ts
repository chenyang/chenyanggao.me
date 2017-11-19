import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutMeComponent, ResumeComponent],
  exports: [
    AboutMeComponent, ResumeComponent
  ]
})
export class GeneralModule { }
