import { Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
  './app.component.css',
  './css/about_me.css',
  './css/home.css',
  './css/index.css',
  './css/resume.css',
  './css/sidebar.css',
  './css/bootstrap/css/bootstrap.min.css',
  './css/reset.css',
  ]
})
export class AppComponent {
  title = 'app';
}
