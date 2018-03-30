import { GeneralModule } from "./modules/general/general.module";
import { ProjectModule } from "./modules/project/project.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from ".//app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ProjectService } from "./service/project.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProjectDirective } from "./directive/project-directive.directive";

@NgModule({
  declarations: [AppComponent, ProjectDirective],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    GeneralModule
  ],
  exports: [BrowserModule],
  providers: [ProjectService], //important! provide service
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "GAO CHENYANG PORTFOLIO SITE";
}
