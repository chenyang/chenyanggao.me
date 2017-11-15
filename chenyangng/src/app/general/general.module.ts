import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutMeComponent],
  exports: [
    AboutMeComponent
  ]
})
export class GeneralModule { }
