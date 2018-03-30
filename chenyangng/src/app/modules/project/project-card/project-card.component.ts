import {ProjectService} from '../../../service/project.service';
import { Component, OnInit } from "@angular/core";
import { ProjectCard } from '../../../model/project';

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"]
})
export class ProjectCardComponent implements OnInit {
  selectedProjectCard: ProjectCard;
  projectList: Array<any>;

  constructor( private projectService: ProjectService) {}

  // method define
  directLink = function(link: string) {
    // TODO go to fixed page
  };

  onSelect(projectCard: ProjectCard): void{
    this.selectedProjectCard = projectCard;
  }

  ngOnInit() {
    this.projectList = this.projectService.getProjectCardList();
  }
}
