import { Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
  './app.component.css',
  './css/home.css',
  './css/index.css',
  './css/sidebar.css',
  './css/bootstrap/css/bootstrap.min.css',
  './css/reset.css',
  './css/projects_detail.css'
  ]
})
export class AppComponent {
  title = 'app';
}
