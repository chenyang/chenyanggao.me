/**
 * Created by Administrateur on 30/03/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: SharedModule.MODULE_LIST,
  exports: SharedModule.MODULE_LIST
})
export class SharedModule {
  static MODULE_LIST = [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ];
}
