import { Component, OnInit } from '@angular/core';
import {Project} from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectList: Array<Project>;

  constructor() {
  }

  ngOnInit() {
     let prj1: Project;
    
    this.projectList = [
      new Project({id: 'michelin', desc: 'MICHELIN® solutions', content: 'J2EE web dashboard development', link: 'views/Michelin.html', active: false}), 
      new Project({id: 'findevent', desc: 'Music Event', content: 'Big Data and Semantic web application for music', link: 'views/FindEvent.html', active: false}), 
    
    ];
  }

}
