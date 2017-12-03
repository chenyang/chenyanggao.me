import { Component, ViewEncapsulation } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    "./css/bootstrap/css/bootstrap.min.css",
    "./css/reset.css",
    "./app.component.css",
    "./css/home.css",
    "./css/index.css",
    "./css/sidebar.css"
  ]
})
export class AppComponent {
  title = "app";
}
